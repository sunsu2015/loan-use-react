/**
 * Created by sunsu on 2016/9/19.
 */
export let basicInitData = [
    {label:'姓名',type:'input',_key:'name',require:true,placeholder:'请输入姓名',rule:['^\\d+$',function(){return false}],error:['不是数字','测试函数返回false']},
    {label:'性别',type:'select',_key:'sex',require:true,options:[{val:'Male',text:'男'},{val:'Female',text:'女'}],value:'Female'},
    {label:'证件类型',type:'select',_key:'certType',require:true,options:[{val:1,text:'身份证'},{val:2,text:'军官证'},{val:3,text:'护照'},{val:4,text:'士兵证'}],value:1},
    {label:'证件号码',type:'input',_key:'certNo',require:true,placeholder:'请输入证件号码'},
    {label:'婚姻状况',type:'select',_key:'marriageStatus',require:true,options:[{val:'Single',text:'未婚'},{val:'Married',text:'已婚'}],value:'Single'},
    {label:'出生日期',type:'input',_key:'birthday',require:true},
    {label:'学历',type:'select',_key:'education',require:true,
        options:[{val:'',text:'请选择'},
                 {val:'Doctor',text:'博士'},
                 {val:'Master',text:'研究生'},
                 {val:'Bachelor',text:'大学本科'}
        ],value:''},
    {label:'职业',type:'select',_key:'jobIndustry',require:true,
        options:[{val:'',text:'请选择'},
                 {val:'GovernmentEmployee',text:'国家机关、党群组织、企业、事业单位负责人'},
                 {val:'Technician',text:'专业技术人员'},
                 {val:'Clerk',text:'办事人员和有关人员'}
        ],value:''},
    {label:'工作单位',type:'input',_key:'jobCompany',require:true},
    {label:'申请人职务',type:'select',_key:'jobPosition',require:true,
        options:[{val:'',text:'请选择'},
                 {val:'Seniormanager',text:'高级领导-局级及局级以上或高管人员'},
                 {val:'Manage',text:'一般员工'},
                 {val:'Other',text:'其他'}
        ],value:''},
];

export let contactInitData = [
    {label:'户籍所在地地址',type:'input',_key:'PROVINCE_CITY',require:true}
];

export let loanInitData = [
    {label:'是否有驾驶证',type:'select',_key:'drivingLicenseHas',require:true,
        options:[
            {val:'Has',text:'有'},
            {val:'No',text:'无'},
            {val:'Training',text:'学车'},
            {val:'HireDriver',text:'雇佣司机'},
            {val:'Other',text:'其他'}
        ],value:'Has'},
    {label:'制造商',type:'select',_key:'carFactory',require:true,options:[{val:'',text:'请选择'},{val:'vfs',text:'上汽大众'}],value:''}
];
export let pbasicInitData =  [
    {label:'配偶姓名',type:'input',_key:'p_name',require:true}
];

export const VisibleFilters = {
    BASIC:'basic',
    PBASIC:'pbasic',
    CONTACT:'contact',
    LOAN:'loan'
}