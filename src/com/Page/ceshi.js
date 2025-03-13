// versions是一个项目的版本号列表，因多人维护，不规则
// var versions=['1.5.1','1.45.0','1.5','6','3.3.3.3.3.3.3']
// 要求从小到大排序，注意'1.45'比'1.5'大
// var sorted=['1.5','1.5.1','1.45.0','3.3.3.3.3.3','6']


const versions=['1.5.1','1.45.0','1.5','6','3.3.3.3.3.3.3']
const sortVersion = (versions) => {
    return versions.sort(()=> {
        return (a, b) => {
            let aArr = a.split('.')
            let bArr = b.split('.')
            let len = Math.max(aArr.length, bArr.length)
            for (let i = 0; i < len; i++) {
                let aNum = aArr[i] ? parseInt(aArr[i]) : 0
                let bNum = bArr[i] ? parseInt(bArr[i]) : 0
                if (aNum > bNum) {
                    return 1
                } else if (aNum < bNum) {
                    return -1
                }
            }
            return 0
        }
    
    


    })

}




console.log(sortVersion(versions))

console.log(1<2<3)

console.log(3>2>1)

var a =['A','B','C']
var b = a
console.log(a)
var c = b
b.length = 0

console.log(c)


console.log(1)
setTimeout(() => {console.log(2)},0)
Promise.resolve(
    console.log(3)
).then(
    console.log(4)
).then(
    console.log(5)
)
    

console.log(6)




