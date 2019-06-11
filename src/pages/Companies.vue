<template lang="html">
  <div class="companies">
    <Company  name="日本ロレアル！" />

  <table class="table table-striped">
    <thead>
        <tr>
            <th>Name</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
        <!-- 各要素を表示 -->
        <tr v-for="(elem, index) in elements">
            <td>ここには名前</td>
            <!-- クリックして要素を削除 -->
            <td>とくになし</td>
        </tr>

        </tbody>

        </table>
          </div>
</template>

<script>
import Company from '@/components/Company'
import firebase from 'firebase'

// const db = firebase.firestore();
// db.collection('companies').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
//   snapshot.forEach((doc) => {
//     let data = doc.data();
//     // $('ul').append('<li>'+data.name+'</li>')
//     console.log(data.name);
//   });
// });

export default {
  data: () => {
    return {
      elements: []
    }
  },
  created: function () {
    this.database = firebase.firestore()
    console.log(this.database.collection('Companies'));
    const el = []
    this.database.collection("Companies").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            el.push({
                name: doc.data().name
            });
            console.log(doc.id, " => ", doc.data());

        });
    });
    this.elements = el
  },
  components: { Company }
}
</script>

<style lang="css" scoped>
</style>
