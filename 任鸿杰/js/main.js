let ShopCar = function () {
    let __list = {};
    return {
        // 添加方法
        register(type, fn) {
            if (__list[type]) {
                __list[type].push(fn);
            } else {
                __list[type] = [fn];
            }
            return this;
        },
        // 调用方法
        fire(type, data = '') {
            if (__list[type]) {
                for (let i = 0; i < __list[type].length; i++) {
                    __list[type][i](data);
                }
            }
            return this;
        }
    }
}()