<template>
    <div>
    <Header />
    <!-- Breadcrumb Section Begin -->
    <div class="breacrumb-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-left">
                    <div class="breadcrumb-text product-more">
                        <router-link to="/"><i class="fa fa-home"></i> Home</router-link>
                        <span>Shopping Cart</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Section Begin -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="cart-table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Image</th>
                                            <th class="p-name text-center">Product Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody v-if="productCheckout.length > 0">
                                        <tr v-for="checkout in productCheckout" v-bind:key="checkout.id">
                                            <td class="cart-pic first-row">
                                                <img :src="checkout.photo" />
                                            </td>
                                            <td class="cart-title first-row text-center">
                                                <h5>{{ checkout.name }}</h5>
                                            </td>
                                            <td class="p-price first-row">Rp. {{ checkout.price }}</td>
                                            <td @click="removeItem(checkout.id)" class="delete-item"><a href="#"><i class="material-icons">
                                              close
                                              </i></a></td>
                                        </tr>
                                    </tbody>
                                    <tbody v-else>
                                        <tr>
                                            <td colspan="4">
                                                <h5 class="pd-3">Keranjang Masih Kosong</h5>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <h4 class="mb-4 text-left">
                                Informasi Pembeli:
                            </h4>
                            <div class="user-checkout text-left">
                                <form method="post">
                                    <div class="form-group">
                                        <label for="namaLengkap">Nama lengkap</label>
                                        <input type="text" class="form-control" id="namaLengkap" aria-describedby="namaHelp" placeholder="Masukan Nama" v-model="customerInfo.name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">Email Address</label>
                                        <input type="email" class="form-control" id="emailAddress" aria-describedby="emailHelp" placeholder="Masukan Email" v-model="customerInfo.email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="namaLengkap">No. HP</label>
                                        <input type="number" class="form-control" id="noHP" aria-describedby="noHPHelp" placeholder="Masukan No. HP" v-model="customerInfo.number" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="alamatLengkap">Alamat Lengkap</label>
                                        <textarea class="form-control" id="alamatLengkap" rows="3" v-model="customerInfo.address" required></textarea>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="proceed-checkout text-left">
                                <ul>
                                    <li class="subtotal">ID Transaction <span>#ADS21574</span></li>
                                    <li class="subtotal mt-3">Subtotal <span>Rp. {{ subtotalPrice }}</span></li>
                                    <li class="subtotal mt-3">Pajak <span>10%</span><br><span>Rp. {{ taxPrice }}</span></li>
                                    <li class="subtotal mt-3">Total Biaya <span>Rp. {{ totalPrice }}</span></li>
                                    <li class="subtotal mt-3">Bank Transfer <span>BNI</span></li>
                                    <li class="subtotal mt-3">No. Rekening <span>0488 888 888</span></li>
                                    <li class="subtotal mt-3">Nama Penerima <span>Nugroho Adi Pratomo</span></li>
                                </ul>
                                <a @click="checkoutDataTransaction()" href="#/sukses" class="proceed-btn">I ALREADY PAID</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Shopping Cart Section End -->
    </div>
</template>

<script>
import Header from '../components/Header'
import axios from 'axios'

export default {
    name: "ShoppingCart",
    components: {
        Header
    },
    data() {
      return {
          productCheckout: [],
          customerInfo: {
              name: '',
              email: '',
              number: '',
              address: ''
          }
      }
    },
    methods: {
        removeItem(idItemStorage) {
            let cheackoutUserStorage = JSON.parse(localStorage.getItem("productCheckout"));
            let itemCheckoutUserStorage = cheackoutUserStorage.map(itemCheckoutUserStorage => itemCheckoutUserStorage.id);
            let index = itemCheckoutUserStorage.findIndex(id => id == idItemStorage);
            this.productCheckout.splice(index, 1);
            
            const parsed = JSON.stringify(this.productCheckout);
            localStorage.setItem('productCheckout', parsed);
            window.location.reload();
        },
        checkoutDataTransaction() {
            let productId = this.productCheckout.map(function(product){
                return product.id
            });

            let checkoutData = {
                'name': this.customerInfo.name,
                'email': this.customerInfo.email,
                'number': this.customerInfo.number,
                'address': this.customerInfo.address,
                'transaction_total': this.totalPrice,
                'transaction_status': "PENDING",
                'transaction_details': productId
            }

            axios
            .post("https://adminadistore.renklii.com/api/checkout", checkoutData)
            .this.$router.push('#/sukses')
            .catch(err => console.log(err));
        },
    },
    mounted() {
        if (localStorage.getItem('productCheckout')) {
          try{
              this.productCheckout = JSON.parse(localStorage.getItem('productCheckout'));
          } catch(e) {
              localStorage.removeItem('productCheckout')
          }
      }
    },
    computed: {
        subtotalPrice() {
            return this.productCheckout.reduce(function(items, data){
                return items + data.price;
            }, 0);
        },
        taxPrice() {
            return (this.subtotalPrice *10)/100;
        },
        totalPrice() {
            return this.subtotalPrice + this.taxPrice;
        }
    }
}
</script>

<style scoped>

.pd-3 {
    padding: 3rem;
}

</style>