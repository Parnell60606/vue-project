<template>
    <h1>全部訂單</h1>
    <!-- 多列排序 data table -->







    <n-table striped>
        <thead>
            <tr>
                <th>訂位確認</th>
                <th>客戶名稱</th>
                <th>訂位日期</th>
                <th>訂位時間</th>
                <th>訂位人數</th>
                <th>備註</th>
            </tr>
        </thead>
        <tbody>
            <!-- for迴圈 -->
            <!-- <tr v-if='orders.length > 0' v-for='order in orders' :key='order._id'> -->
            <!-- <tr v-if='orders.length > 0' v-for='order in orders'>
                <td>{{  orders[0]  }}</td>
                <td>44</td>
                <td>444</td>
                <td>{{  orders  }}</td>
                <td>4444</td>
                <td>...</td>
            </tr> -->


            <tr v-if='orders.length > 0' v-for='order in orders[0]'>
                <td>{{  order.orderStatus  }}</td>
                <td>{{  order.user?.userName  }}</td>
                <td>{{  new Date(order.bookingDate * 1000).toDateString()  }}</td>
                <td>{{  order.bookingDate  }}</td>
                <td>{{  new Date(order.bookingTime * 1000).toLocaleTimeString()  }}</td>
                <td>{{  order.usersNote  }}</td>
                <!-- <td>{{  order._id  }}</td> -->
            </tr>
            <!-- {{orders}}  列出data.result裡面的所有值 (陣列包陣列包物件) -->
            <!-- new Date  是從秒開始 (資料庫存的是毫秒) -->
            <!-- (order.user).userName  包起來刪掉就好了，待查 -->
        </tbody>
    </n-table>
</template>



<script setup>
import { api, apiAuth } from '../../plugins/axios'
import Swal from 'sweetalert2'
import { objectKeys } from '@antfu/utils';

const orders = reactive([])



const order = reactive({
    _id: '',
    orderStatus: '',
    userName: '',
    bookingDate: '',
    usersNote: ''

})


const init = async () => {
    try {
        const { data } = await apiAuth.get('/orders/all')
        orders.push(data.result) // 會多包一個[]
        // let orders = data.result
        // orders.push(...data)



        console.log(orders[0])
        console.log(data.result[1].user.userName)
        // document.write(orders)
        return
        // const x = data.result.length


        // for (let i = 0; i < data.result.length; i++) {

        //     console.log(data.result[i])
        // }


        console.log(data.result[0])


        order._id = data.result[1]._id
        order.orderStatus = data.result.orderStatus


        // return order


    } catch (error) {
        console.log(error)
        Swal.fire({
            icon: 'error',
            title: '失敗',
            text: '無法取得訂單'
        })
    }
}
init()


</script>

<!-- 
<script setup>
// import { defineComponent, ref } from 'vue'

// const columns = [
//     {
//         title: 'Name',
//         key: 'name'
//     },
//     {
//         title: 'Age',
//         key: 'age',
//         sorter: (row1, row2) => row1.age - row2.age
//     },
//     {
//         title: 'Chinese Score',
//         key: 'chinese',
//         defaultSortOrder: false,
//         sorter: {
//             compare: (a, b) => a.chinese - b.chinese,
//             multiple: 3
//         }
//     },
//     {
//         title: 'Math Score',
//         defaultSortOrder: false,
//         key: 'math',
//         sorter: {
//             compare: (a, b) => a.math - b.math,
//             multiple: 2
//         }
//     },
//     {
//         title: 'English Score',
//         defaultSortOrder: false,
//         key: 'english',
//         sorter: {
//             compare: (a, b) => a.english - b.english,
//             multiple: 1
//         }
//     },
//     {
//         title: 'Address',
//         key: 'address',
//         filterOptions: [
//             {
//                 label: 'London',
//                 value: 'London'
//             },
//             {
//                 label: 'New York',
//                 value: 'New York'
//             }
//         ],
//         filter(value, row) {
//             return ~row.address.indexOf(value)
//         }
//     }
// ]

// const data = [
//     {
//         key: 0,
//         name: 'John Brown',
//         age: 32,
//         address: 'New York No. 1 Lake Park',
//         chinese: 98,
//         math: 60,
//         english: 70
//     },
//     {
//         key: 1,
//         name: 'Jim Green',
//         age: 42,
//         address: 'London No. 1 Lake Park',
//         chinese: 98,
//         math: 66,
//         english: 89
//     },
// ]


// const pagination = ref({ pageSize: 5 })

// const filterAddress = () => {
//     dataTableInstRef.value.filter({
//         address: ['London']
//     })
// }

// const sortName = () => {
//     dataTableInstRef.value.sort('name', 'ascend')
// }

// const clearFilters = () => {
//     dataTableInstRef.value.filter(null)
// }
// const clearSorter = () => {
//     dataTableInstRef.value.sort(null)
// }

</script> -->

<!-- 
<script setup>
import { defineComponent, ref } from 'vue'
import { api, apiAuth } from '../../plugins/axios'



import { NText } from "naive-ui";


const columns =
    [
        {
            title: '訂位確認',
            key: 'orderStatus',

        },
        {
            title: '客戶名稱',
            key: 'userName'
        },
        {
            title: '訂位日期',
            key: 'bookingDate',

        },
        {
            title: '訂位時間',
            key: 'bookingTime',

        },
        {
            title: '訂位人數',
            key: 'numberOfPeople',

        },
        {
            title: '備註',
            key: 'usersNote',

        },

    ]


// const ordersData = [
//     {
//         key: '',
//         orderStatus: '',
//         userName: '',
//         bookingDate: '',
//         bookingTime: '',
//         numberOfPeople: '',
//         usersNote: '',
//     }

// ]

const ordersData = [
    {
        key: 0,
        orderStatus: 1,
        userName: 'GoodPerson',
        bookingDate: 1661700985000,
        bookingTime: 56185000,
        numberOfPeople: 12,
        usersNote: '',
    }

]




// const renderCell = async (value) => {
//     try {


//         if (!value) {
//             return h(NText, { depth: 3 }, { default: () => "空" });
//         }
//         // const { data } = await apiAuth.get('/orders/all')

//         return value;

//     } catch (error) {
//         console.log(error.type)
//     }
// }







const renderCell = async (value) => {



    if (!value) {
        return h(NText, { depth: 3 }, { default: () => "空" });
    }
    const { data } = await apiAuth.get('/orders/all')

    return value;

}


const pagination = ref({ pageSize: 5 })


</script> -->