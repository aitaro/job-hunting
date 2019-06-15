<template lang="html">
  <div class="companies">
    <Company  name="日本ロレアル！" />

  <table class="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th>業種</th>
        </tr>
    </thead>
    <tbody>
        <!-- 各要素を表示 -->
        <tr v-for="(elem, index) in elements" :key='index'>
            <td>{{elem.name}}</td>
            <!-- クリックして要素を削除 -->
            <td>{{elem.category}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Company from '@/components/Company'
import firebase from 'firebase/app'
import 'firebase/firestore'

export default {
  data: () => {
    return {
      elements: []
    }
  },
  created: function () {
    this.database = firebase.firestore()
    console.log(this.database.collection('Companies'))
    const el = []
    this.database.collection('Companies').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        // doc.data() is never undefined for query doc snapshots
        el.push({
          name: doc.data().name
        })
        console.log(doc.id, ' => ', doc.data())
      })
    })
    this.elements = el
  },
  components: {
    Company
  }
}
</script>

<style lang="css" scoped>
</style>
