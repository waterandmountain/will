(function () {
    ShopCar.register('delMsg', function (data) {
                console.log(data)
            let k = data.k;
            let num = $('section dd').eq(k).find('p input').val();
            if (num > 1) {
                num--;
                storeAry[k]++;
            } else {
                num = 1;
            }
            if (num > storeAry[k]) num = storeAry[k];
            $('section dd').eq(k).find('p input').val(num);
        })
        .register('addMsg', function (data) {
            let k = data.k;
            let num = $('section dd').eq(k).find('p input').val();
            if (num < storeAry[k]) {
                num++;
                storeAry[k]--;
            } else {
                num = storeAry[k];
            }
            if (num < 1) num = 1;
            $('section dd').eq(k).find('p input').val(num);
        })
        .register('addPara', function () {
            for (let i = 0; i < $('section dd').length; i++) {
                $('section dd').eq(i)
                    .find('span').text(priceAry[i])
                    .siblings('i').text(storeAry[i]);
            }
        })
        .register('addCheck', function (data) {
            let allPrice = 0;
            let allNum = 0;
            data.ele.each(function () {
                let price = parseFloat($(this).parents('dd').find('span').text());
                let num = parseInt($(this).parents('dd').find('p input').val());
                allPrice += (price * num);
                allNum += num;
            })
            $('footer b').text(allPrice.toFixed(2));
            $('footer span').text(allNum);
        })
}())