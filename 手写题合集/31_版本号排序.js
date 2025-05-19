// suanfatSemantic Versioning 是一个前端通用的版本定义规范。
//格式为“{ MAJOR }.{ MINOR }.{ PATCH } -{ alpha| beta | rc}.{ number }”，
//要求实现 compare(a, b) 方法，比较 a, b 两个版本大小。
// 当 a > b 是返回 1；
// 当 a = b 是返回 0；
// 当 a < b 是返回 - 1；
// 其中，rc > beta > alpha，major > minor > patch；
// 例子，1.2.3 < 1.2.4 < 1.3.0-alpha.1 < 1.3.0-alpha.2 < 1.3.0-beta.1 < 1.3.0-rc.1 < 1.3.0
function versionSort(version1, version2) {
    function getWeight(version) {
        let [match, major, minor, patch, mini, env] = version.match(/(\d+).(\d+).(\d+)-(.*).(\d+)/)
            || [...version.match(/(\d+).(\d+).(\d+)/), '', 0];
        function weightMini(mini) {
            switch (mini) {
                case 'alpha': return 1
                case 'beta': return 2
                case 'rc': return 3
                case '': return 4
            }
        }
        return Number(major) * 10000 + Number(minor) * 100 + Number(patch) + weightMini(mini) + Number(env) * 0.001
    }
    if (getWeight(version1) == getWeight(version2)) return 0
    return getWeight(version1) > getWeight(version2) ? 1 : -1
}
let arr = ['1.2.3', '1.2.4', '1.3.0-alpha.1', '1.3.0-alpha.2', '1.3.0-beta.1', '1.3.0-rc.1', '1.3.0']
console.log(arr.sort(versionSort));