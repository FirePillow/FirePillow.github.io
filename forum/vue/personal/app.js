datalist = [{
        avatarurl: "../common/sampleavatar.png",
        badge1: "DP",
        color1: "bgred",
        badge2: "活动",
        color2: "bggreen",
        title: "Battle of Bands 开始报名",
        stat: "Abby 回复于 13:13",
        postcount: 3,
        body: "SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN"
    },
    {
        avatarurl: "../common/sampleavatar.png",
        badge1: "DP",
        color1: "bgred",
        badge2: "活动",
        color2: "bggreen",
        title: "Battle of Bands 开始报名",
        stat: "Abby 回复于 13:13",
        postcount: 3,
        body: "SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN"
    },
    {
        avatarurl: "../common/sampleavatar.png",
        badge1: "DP",
        color1: "bgred",
        badge2: "活动",
        color2: "bggreen",
        title: "Battle of Bands 开始报名",
        stat: "Abby 回复于 13:13",
        postcount: 3,
        body: "SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN"
    },
    {
        avatarurl: "../common/sampleavatar.png",
        badge1: "DP",
        color1: "bgred",
        badge2: "活动",
        color2: "bggreen",
        title: "Battle of Bands 开始报名",
        stat: "Abby 回复于 13:13",
        postcount: 3,
        body: "SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN"
    }
];

Vue.component('preposts', {
    props: ['data'],
    template: `
            <div class="prepost">
                <img class="prepostimg" v-bind:src="data.avatarurl">
                <div class="prepcontent">
                    <div class="badge">
                        <span class="badge1" v-bind:class="data.color1">DP</span><span class="badge2" v-bind:class="data.color2">活动</span>
                    </div>
                    <div class="prepcomments">
                        <span><i class="fa fa-comments" aria-hidden="true"></i> {{data.postcount}}</span>
                    </div>
                    <div class="preptitle">
                        <b>{{data.title}}</b>
                    </div>
                    <div class="prepstat">
                        <span>{{data.stat}}</span>
                    </div>
                    <div class="prepbody">
                        <span>{{data.body}}</span>
                    </div>
                </div>
            </div>
  `
});

window.addEventListener("load", () =>
    new Vue({
        el: '#preposts',
        data: {
            datas: datalist
        }
    })
);