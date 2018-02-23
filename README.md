# Maizhan


<div>
</h2>打包注意事项</h2>
<p>1. 将css中的字体路径修改一下  搜索 ' fonts ' 定位到图标一栏</p>
<p>2. </p>
<p>3. </p>
</div><br>
<div></div><br>
<div>
<b>日期使用</b><br>
 
 <el-date-picker v-model="value4" type="datetimerange" :picker-options="pickerOptions2"
 placeholder="选择时间范围" align="left" <br><b>@change="getDates({filterData:applyList,value4})">
</b><br></el-date-picker><br>
<b>目前searchFilter中的时间一律叫 registerTime 回头再改 </b>
<b>getDaes()中参数必须是一个对象 第一个参数必须是 filterData : '本页数据' ,第二个必须是这个input对应的v-model==value4</b>
</div><br>
<div>
  <h4>添加页面时注意 左侧导航显示的顺序是 store2/mutations.js中 </h4> 
  <strong> state.routerconfigs.routes </strong>数据中的顺序
</div>
<br>
<ul>
  <li>http://www.longtel.com/console/management/isl!list
  <h6>编辑后面差一个产看拓扑的链接</h6>
  </li>
 
  <li>http://www.longtel.com/console/excelserver/customer
  <h6>excel客户账户 感觉样式不一样没做</h6>
  </li>

  <li>http://www.longtel.com/horizon/settings/
  <h6>帐号管理没做</h6>
  </li>
  <li>http://www.longtel.com/console/management/consume
  <h6>分组和行业没做 缺少“时间” 表格最后一行不一致
  </h6>
  </li>
  <li>http://www.longtel.com/console/management/recharge
  <h6>分组和行业没有做 时间缺少
  </li>
  <li>http://www.longtel.com/horizon/identity/
  <h6>缺少input 表格最后一列样式不对</h6>
  </li>
  <li>http://www.longtel.com/horizon/admin/
  <h6>用户概况没做</h6>
  </li>
  <li><h6>打不开资源使用量</h6>
  </li>
  <li>虚拟管理器没做
  </li>
  <li>主机聚合没做
  </li>
  <li>http://www.longtel.com/horizon/admin/volumes/
  <h6>卷类型和ssd快照没做</6>
  <li>
  <li>http://www.longtel.com/horizon/admin/info/
  <h6> 计算服务，块存储服务，哇马钢罗代理，编排服务没做</h6>
  </li>
  
  
</ul>
<h3>点击按钮出现弹框</h3>
el-button  :icon=''applyList.buttons[1].icon' <b> @click=" huajia"</b> >划价</el-button>
<h5>这是弹框的内容</h5>
<textarea style='width:100%;height:400px'>
<Pop v-if="pop1.popTitle" :itemss="pop1" >
      <div class="popContent">
        <ul class="an-width170">
          <li >
           <div>用户：</div>
            <div>{{applyList.selected[0].id}}</div>
          </li>
          <li>
            <div>SDN开通申请单ID：</div>
            <div>47</div>
          </li>
          <li>
            <div>请填写端口初装费用：</div>
            <div><input type="text"></div>
          </li>
        </ul>
      </div>
    </Pop>

</textarea>
<h5>数据</h5> 
 pop1:{
          popTitle:'',
          numTop:'',
          fun:this.pop1fun
        },

<h5>事件</h5> 

//点击划价<br>
      huajia(){<br>
//        console.log(this.applyList.selected);<br>
        if(this.applyList.selected.length==1){<br>
        //调用方法-参数为数组['划价',this.pop1]<br>
          this.pop(['划价',this.pop1])<br>
        }else{<br>
          alert('请仅选择一项')<br>
        }<br>
      },<br>
      pop1fun(){<br>
      //对划价进行的一系列的操作<br>
       console.log(this.applyList.selected);<br>
      },

,





