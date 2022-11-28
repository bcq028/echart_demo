import { Ref, ref } from "vue";
import { io } from 'socket.io-client'

export const tableData1: Ref<{ key: string, value: number }[]> = ref(
    []
)
export const tableData2: Ref<{ key: string, value: number }[]> = ref(
    []
)
export const tableData3: Ref<{ key: string, value: number }[]> = ref(
    []
)
export const tableData4:Ref<{key:string,value:number}[]> = ref(
    []
)
export function appendToTable1(tableId: number, type: string, num: number) {
    const table = tableId == 1 ?
        tableData1
        : tableId == 2
            ? tableData2
            : tableId == 3
                ? tableData3
                : tableData4;
    let prev = table.value.filter(p => p.key == type)[0]
    if (prev) {
        prev.value = num;
    } else {
        table.value.unshift({
            key: type,
            value: num
        })
       if(table.value.length>=5) table.value.pop()
    }
    table.value.sort((a, b) => -a.value + b.value)
}

export const cityData:Ref<{name:string,value:number}[]> = ref(
    []
)

export function updateCity(city: string, num: number) {
    let prev = cityData.value.filter(p => p.name == city)[0]
    if (prev) {
        prev.value = num;
    } else {
        cityData.value.unshift({
            name: city,
            value: num
        })
    }
    cityData.value.sort((a, b) => -a.value + b.value)
}

export const maleData:Ref<number[]> = ref(
    []
)

export const femaleData:Ref<number[]> = ref(
    []
)

export function updateShopping(gender: number, value: number) {
    const data = gender ? femaleData : maleData;
    if(data.value.length>=5) data.value.shift();
    data.value.push(value);
}


var socket = io('http://' + '122.9.66.251' + ':' + '5000');
socket.on('connect', function () {
    socket.emit('test_connect', { data: 'I\'m connected!' });
});

socket.on('merchant', (data: any) => {
    data = eval(data).data
    appendToTable1(2, Object.keys(data)[0], data[Object.keys(data)[0]])
})

socket.on('brand', (data: any) => {
    data = eval(data).data
    appendToTable1(3, Object.keys(data)[0], data[Object.keys(data)[0]])
})

socket.on('item', (data: any) => {
    data = eval(data).data
    appendToTable1(4, Object.keys(data)[0], data[Object.keys(data)[0]])
})

socket.on('cat', (data: any) => {
    data = eval(data).data
    appendToTable1(1, Object.keys(data)[0], data[Object.keys(data)[0]])
})

socket.on('province', (data: any) => {
    data = eval(data).data
    updateCity(Object.keys(data)[0], data[Object.keys(data)[0]])
})

socket.on('gender', (data: any) => {
    data = eval(data).data
    updateShopping(parseInt(Object.keys(data)[0]), data[Object.keys(data)[0]])
})

