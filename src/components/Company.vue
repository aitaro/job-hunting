<template lang="html">
  <div class="">
    <h2>{{ name }}</h2>
    <p>業種：{{ category }}</p>
    <p>マイページ： {{ mypage_url }}</p>
    <div class="mypage-id">
      <label for="">mypage ID</label>
      <input v-model="mypage_id" v-on:change="save" placeholder="edit me">
    </div>

  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firestore'
export default {
  props: ['company_id'],
  data: () => {
    return {
      name: '',
      category: '',
      mypage_id: '',
      mypage_url: '',
      entry_id: ''
    }
  },
  created: function () {
    this.database = firebase.firestore()
    this.getEntry()

    this.database.collection('Companies').doc(this.company_id).get().then((doc) => {
      this.name = doc.data().name
      this.category = doc.data().category
      this.mypage_url = doc.data().mypage_url
    })
  },
  methods: {
    save: function () {
      console.log('save')
      var docData = {
        mypage_id: this.mypage_id
      }
      this.database.collection("Entries").doc(this.entry_id).update(docData).then((doc) => {
          console.log("Document successfully written!");
      });
    },
    getEntry: function () {
      this.database.collection("Entries").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.data().company_id)
          if(doc.data().company_id == this.company_id && doc.data().user_id == firebase.auth().currentUser.uid){
            console.log(doc.id)
            this.entry_id = doc.id
            this.mypage_id = doc.data().mypage_id
          }
        })
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
