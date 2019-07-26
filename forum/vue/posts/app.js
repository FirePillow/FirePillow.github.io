ffdata = {
	avatarurl: "../common/sampleavatar.png",
	badge1: "DP",
	color1: "bgred",
	badge2: "活动",
	color2: "bggreen",
	title: "Battle of Bands 开始报名",
	stat: "User_Kcibald | June 25, 2019 | Tuesday",
	likecount: 128,
	body: "太阳从大玻璃窗透进来，照到大白纸糊的墙上，照到三屉桌上，照到我的小床上来了。我醒了，还躺在床上，看那 道太阳光里飞舞着的许多小小的，小小的尘埃。宋妈过来掸窗台，掸桌子，随着鸡毛掸子的舞动，那道阳光里的尘 埃加多了，飞舞得更热闹了，我赶忙拉起被来蒙住脸，是怕尘埃把我呛得咳嗽。 宋妈的鸡毛掸子轮到来掸我的小床了，小床上的棱棱角角她都掸到了，掸子把儿碰在床栏上，格格地响，我想骂她， 但她倒先说话了：“还没睡够哪！”说着，她把我的被大掀开来，我穿着绒褂裤的身体整个露在被外，立刻就打了两 个喷嚏。她强迫我起来，给我穿衣服。印花斜纹布的棉袄棉裤，都是新做的，棉裤筒多可笑，可以直立放在那里， 就知道那棉花够多厚了。 妈正坐在炉子边梳头，倾着身子，一大把头发从后脖子顺过来，她就用篦子篦呀篦呀的，炉上是一瓶玫瑰色的发油， 天气冷，油凝住了，总要放在炉子上化一化才能擦。 窗外很明亮，干秃的树枝上落着几只不怕冷的小鸟，我在想，什么时候那树上才能长满叶子呢？这是我们在北京过 的第一个冬天。 妈妈还说不好北京话，她正在告诉宋妈，今天买什么菜。妈不会说“买一斤猪肉，不要太肥”。她说：“买一斤租漏， 不要太回。” 妈妈梳完了头，用她的油手抹在我的头发上，也给我梳了两条辫子。我看宋妈提着篮子要出去了，连忙喊住她： “宋妈，我跟你去买菜。” 宋妈说：“你不怕惠难馆的疯子？”"
}

floordata = [{
	avatarurl: "../common/sampleavatar.png",
	title: "Battle of Bands 开始报名",
	stat: "User_Kcibald | June 25, 2019 | Tuesday",
	likecount: 128,
	body: "楼主这就是上海中学生必读书目《城南旧事》？"
},
{
	avatarurl: "../common/sampleavatar.png",
	title: "Battle of Bands 开始报名",
	stat: "User_Kcibald | June 25, 2019 | Tuesday",
	likecount: 128,
	body: "太阳从大玻璃窗透进来，照到大白纸糊的墙上，照到三屉桌上，照到我的小床上来了。我醒了，还躺在床上，看那 道太阳光里飞舞着的许多小小的，小小的尘埃。宋妈过来掸窗台，掸桌子，随着鸡毛掸子的舞动，那道阳光里的尘 埃加多了，飞舞得更热闹了，我赶忙拉起被来蒙住脸，是怕尘埃把我呛得咳嗽。 宋妈的鸡毛掸子轮到来掸我的小床了，小床上的棱棱角角她都掸到了，掸子把儿碰在床栏上，格格地响，我想骂她， 但她倒先说话了：“还没睡够哪！”说着，她把我的被大掀开来，我穿着绒褂裤的身体整个露在被外，立刻就打了两 个喷嚏。她强迫我起来，给我穿衣服。印花斜纹布的棉袄棉裤，都是新做的，棉裤筒多可笑，可以直立放在那里， 就知道那棉花够多厚了。 妈正坐在炉子边梳头，倾着身子，一大把头发从后脖子顺过来，她就用篦子篦呀篦呀的，炉上是一瓶玫瑰色的发油， 天气冷，油凝住了，总要放在炉子上化一化才能擦。 窗外很明亮，干秃的树枝上落着几只不怕冷的小鸟，我在想，什么时候那树上才能长满叶子呢？这是我们在北京过 的第一个冬天。 妈妈还说不好北京话，她正在告诉宋妈，今天买什么菜。妈不会说“买一斤猪肉，不要太肥”。她说：“买一斤租漏， 不要太回。” 妈妈梳完了头，用她的油手抹在我的头发上，也给我梳了两条辫子。我看宋妈提着篮子要出去了，连忙喊住她： “宋妈，我跟你去买菜。” 宋妈说：“你不怕惠难馆的疯子？”"
}]


Vue.component('ff', {
    props: ['data'],
    template: `
    				<div>
					<div class="titlehead">
						<div class="titleleft">
		                    <div class="badge">
		                        <span class="badge1" v-bind:class="data.color1">DP</span><span class="badge2" v-bind:class="data.color2">活动</span>
		                    </div>
							<div class="title">{{data.title}}</div>
							<div class="stamp">{{data.stat}}</div>
						</div>
						<div class="titleright">
							<div class="floorcount">#1 floor</div>
							<img class="avatar" v-bind:src="data.avatarurl">
						</div>
					</div>
					<div class="vhtml">
						{{data.body}}
					</div>
					<div class="botbar">
						{{data.likecount}}
						<i class="fa fa-heart-o" aria-hidden="true"></i>
						<i class="fa fa-ellipsis-h" aria-hidden="true"></i>
						<i class="fa fa-comments-o" aria-hidden="true"></i>
					</div>
					<hr>
					</div>
  `
});

Vue.component('floors', {
    props: ['data'],
    template: `
				<div class="floor">
					<div class="titlehead">
						<div class="titleright">
							<div class="floorcount">#{{index}} floor</div>
							<img class="avatar" v-bind:src="data.avatarurl">
						</div>
						<div class="titleleft">
							<div class="stamp">{{data.stat}}</div>
						</div>
					</div>
					<div class="vhtml">
						{{data.body}}
					</div>
					<div class="botbar">
						{{data.like}}
						<i class="fa fa-heart-o" aria-hidden="true"></i>
						<i class="fa fa-ellipsis-h" aria-hidden="true"></i>
						<i class="fa fa-comments-o" aria-hidden="true"></i>
					</div>
					<hr>
				</div>
  `
});

window.addEventListener("load", () =>
    new Vue({
        el: '#ff',
        data: {
            ff: ffdata
        }
    })
);

window.addEventListener("load", () =>
    new Vue({
        el: '#floors',
        data: {
            datas: floordata
        }
    })
);

