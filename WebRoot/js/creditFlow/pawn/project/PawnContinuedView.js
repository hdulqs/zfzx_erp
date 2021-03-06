/**
 * @author:
 * @class SlCompanyMainView
 * @extends Ext.Panel
 * @description [SlCompanyMain]管理
 * @company 北京互融时代软件有限公司
 * @createtime:
 */
PawnContinuedView = Ext.extend(Ext.Panel, {
	// 构造函数
	constructor : function(_cfg) {
		Ext.applyIf(this, _cfg);
		// 初始化组件
		this.initUIComponents();
		// 调用父类构造
		PawnContinuedView.superclass.constructor.call(this, {
			items : [ this.gridPanel ]
		});
	},// end of constructor
	// 初始化组件
	initUIComponents : function() {
	this.topbar = new Ext.Toolbar( {
			items : [ {
				iconCls : 'btn-edit',
				text : '编辑',
				xtype : 'button',
				scope : this,
				hidden : this.isHiddenEdit,
				handler : this.editRs
			}, {
				iconCls : 'btn-readdocument',
				text : '查看',
				xtype : 'button',
				scope : this,
				handler : this.seeRs
			}]
		});
		this.gridPanel = new HT.GridPanel( {
			url : __ctxPath + "/creditFlow/pawn/project/listPawnContinuedManagment.do?projectId="+this.projectId+"&businessType="+this.businessType+"&continueId="+this.continueId,
			showPaging : false,
			hiddenCm:true,
			autoHeight : true,
			tbar : this.topbar,
			fields : [ {
				name : 'continueId',
				type : 'long'
			}, 'continuePawnNum', 'payintentPeriod', 'startDate', 'intentDate',
					'payaccrualType', 'accrual', 'monthFeeRate', 'managerId', 'managerName',
					'manageDate','remarks','createDate','projectId',
					'businessType','dayOfEveryPeriod','payintentPerioDate','isStartDatePay','isPreposePayAccrual','isInterestByOneTime'],
			columns : [{
			   	header : '续当凭证号',
				dataIndex : 'continuePawnNum'
			}, {
				header : '续当期数',
				dataIndex : 'payintentPeriod'
			}, {
				header : '续当开始日期',
				dataIndex : 'startDate'
			}, {
				header : '续当到期日期',
				dataIndex : 'intentDate'
			}, {
				header : '续当利率',
				dataIndex : 'accrual'
			}, {
				header : '续当费率',
				dataIndex : 'monthFeeRate'
			}, {
				header : '备注',
				dataIndex : 'remarks'
			}, {
				header : '受理人',
				dataIndex : 'managerName'
			}, {
				header : '受理日期',
				dataIndex : 'manageDate'
			}]
		//end of columns
		});


	},
	editRs:function(){
		var s = this.gridPanel.getSelectionModel().getSelections();
		if (s <= 0) {
			Ext.ux.Toast.msg('操作信息','请选中任何一条记录');
			return false;
		}else if(s.length>1){
			Ext.ux.Toast.msg('操作信息','只能选中一条记录');
			return false;
		}else{	
			record=s[0]
			if(record.data.continueId<this.gridPanel.getStore().getAt(this.gridPanel.getStore().getTotalCount()-1).data.continueId){
				Ext.ux.Toast.msg('操作信息','只能编辑最后一条记录');
				return false;
			}
			new PawnContinuedWindow({projectId:record.data.projectId,businessType:record.data.businessType,continueId:record.data.continueId,idDefinition:'continueEdit',isAllReadOnly:false,gridPanel:this.fundGridPanel,conGridPanel:this.gridPanel}).show()
		}	
	},
	seeRs : function(){
		var s = this.gridPanel.getSelectionModel().getSelections();
		if (s <= 0) {
			Ext.ux.Toast.msg('操作信息','请选中任何一条记录');
			return false;
		}else if(s.length>1){
			Ext.ux.Toast.msg('操作信息','只能选中一条记录');
			return false;
		}else{	
			record=s[0]
			new PawnContinuedWindow({projectId:record.data.projectId,businessType:record.data.businessType,continueId:record.data.continueId,idDefinition:'continueSee',isAllReadOnly:true,gridPanel:this.fundGridPanel,conGridPanel:this.gridPanel}).show()
		}	
	}
	
});
