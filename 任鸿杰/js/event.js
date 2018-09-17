$(function () {
    $('section dd').each((k, i) => {
        $(i).find('button').click(function () {
            if ($(this).index() == 3) {
                ShopCar.fire('delMsg', {
                    k
                }).fire('addPara');
            } else {
                ShopCar.fire('addMsg', {
                    k
                }).fire('addPara');
            }
            if ($('dd input[type="checkbox"]').eq(k)[0].checked) {
                ShopCar.fire('addPara').fire('addCheck', {
                    ele: $('dd input[type="checkbox"]:checked')
                })
            }
        })
    })
    $('input[type="checkbox"]').change(function () {
        let lock = true;
        for (let i = 0; i < $('dd input[type="checkbox"]').length; i++) {
            if (!$('dd input[type="checkbox"]').eq(i)[0].checked) {
                lock = false;
            }
        }
        $('input[type="checkbox"]').eq(0).attr('checked', lock);
        ShopCar.fire('addCheck', {
            ele: $('dd input[type="checkbox"]:checked')
        })
    })
})