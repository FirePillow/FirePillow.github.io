datalist=[
	{avatarurl:"../common/sampleavatar.png",badge1:"DP",color1:"bgred",badge2:"活动",color2:"bggreen",title:"Battle of Bands 开始报名",stat:"Abby 回复于 13:13",
	body:"SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN"},
	{avatarurl:"../common/sampleavatar.png",badge1:"DP",color1:"bgred",badge2:"活动",color2:"bggreen",title:"Battle of Bands 开始报名",stat:"Abby 回复于 13:13",
	body:"SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN"}
]

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
						<span><i class="fa fa-comments" aria-hidden="true"></i> 3</span>
					</div>
					<div class="preptitle">
						<b>Battle of Bands 开始报名</b>
					</div>
					<div class="prepstat">
						<span>Abby 回复于 13:13</span>
					</div>
					<div class="prepbody">
						<span>SDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJSDNSADNJSDNAKJSNKJANSDKAJNSDKNASDJNAKCNJHUGEBGWBUIDFNJDNCSNFFINDSDFVAbbyNFJSDNFSDCNCIUENWINFIDSNFDISNSDINUCSIUENFIEUBRFISDNFOSNFONEIBFSDNFJSDNFKSDJNFJKNKSDJN</span>
					</div>
				</div>
			</div>
  `
})

var app = new Vue({
  el: '#preposts',
  data: {
    datas: datalist
  }
})