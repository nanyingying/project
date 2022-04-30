class shopping {
    constructor() {
        //给属性赋值, 调用其他方法
        this.getDate();
        //将加入购物车使用事件委托
        // this.$('.sk_bd ul').addEventListener('click', this.addCartFn.bind(this));
    }
    //获取数据的方法
    async getDate() {
        let { data, status } = await axios.get('http://localhost:8888/goods/list?current=1')
        
        //判断返回值的状态, 追加数据
        if (status == 200) {
            let html = '';
            data.list.forEach(goods => {
                html += `<li class="sk_goods" data-id="${goods.goods_id}">
                <a href="detail.html"><img src="${goods.img_big_logo}" alt=""></a>
                <h5 class="sk_goods_title">${goods.title}</h5>
                <p class="sk_goods_price"><em>¥${goods.current_price}</em> <del>￥${goods.price}</del></p>
                <div class="sk_goods_progress">
                    已售<i>${goods.sale_type}</i>
                    <div class="bar">
                        <div class="bar_in"></div>
                    </div>
                    剩余<em>${goods.goods_number}</em>件
                </div>
                <a href="detail.html" class="sk_goods_buy">立即抢购</a>
                </li>`;
                
            });

            this.$('.sk_bd ul').innerHTML = html;
        }
    }

    $(tag) {
        let res = document.querySelectorAll(tag)
        return res.length == 1 ? res[0] : res;
    }
}
new shopping;