/**
 * @extends Ext.Panel
 * @description 贷款本息实收明细表
 */
CsInvestmentpersonSumInvest = Ext.extend(Ext.Panel, {
	panel:null,
	url:'',
	// 构造函数
	constructor : function(_cfg) {
		Ext.applyIf(this, _cfg);
		// 初始化组件
		this.initUIComponents();
		// 调用父类构造
		CsInvestmentpersonSumInvest.superclass.constructor.call(this, {
			id : 'CsInvestmentpersonSumInvest'+this.reportKey,
			title : this.title,
			layout : 'border',
			iconCls:"btn-tree-team39",
			items : [searchPanel,this.toolbar,{
				region : 'center',
				id : 'reportTemp' + this.reportKey,
				border : false,
				xtype : 'panel',
				items:this.toolbar,
				html : '<div id="'+this.reportKey+'"></div>'
			}],
			listeners : {
				'afterrender' : function(v) {
					commomClick(this.panel,this.url,this.reportKey,'');
				}
			}
		});
	},
	// 初始化组件
	initUIComponents : function() {
		var firstDate = new Date();
		var endDate = new Date(firstDate);
		endDate.setMonth(firstDate.getMonth()+1);

		var reportKey=this.reportKey;
		
		var pdfButton = new Ext.Button({
			text : 'pdf',
			iconCls : 'btn-pdf'
		});
		var htmlButton = new Ext.Button({
			text : 'html',
			iconCls : 'btn-ie'
		});
		var xlsButton = new Ext.Button({
			text : 'excel',
			iconCls : 'btn-xls'
		});
		
		this.toolbar = new Ext.Toolbar({
			autoWidth : true,
			layout : 'hbox',
			defaults : {
				anchor : '10%,10%'
			},
			items : [pdfButton,xlsButton, htmlButton]
		});

		searchPanel = new HT.SearchPanel({
			id : 'searchPanel' + reportKey,
			layout : 'column',
			region : 'north',
			height : 20,
			anchor : '100%',
			keys : [{
				key : Ext.EventObject.ENTER,
				fn : this.search,
				scope : this
			}, {
				key : Ext.EventObject.ESC,
				fn : this.reset,
				scope : this
			}],
			layoutConfig: {
               align:'middle'
            },
			items : [{ 
				columnWidth : .2,
				layout : 'form',
				border : false,
				labelAlign : 'right',
				items : [ {
					labelWidth:70,    
					fieldLabel : '累计投资起',
					name : 'SumBuyMoney_GE',
					xtype :'numberfield',
					anchor : '100%',
					value:1000
				}] 
			},{ 
				columnWidth : .15,
				layout : 'form',
				border : false,
				labelAlign : 'right',
				style : 'padding-left:15px;',
				labelWidth:15,
				items : [{
					fieldLabel : '至',
					name : 'SumBuyMoney_LE',
					xtype :'numberfield',
					anchor : '90%',
					value:10000
				}] 
			},{
				columnWidth : .2,
				layout : 'form',
				border : false,
				labelAlign : 'right',
				labelWidth:90,
				items : [{
					fieldLabel : '门店名称',
					anchor : '100%',
					xtype : 'combo',
					triggerClass : 'x-form-search-trigger',
					editable : false,
					readOnly : this.isReadOnly,
					hiddenName : "departMentName_EQ",
					onTriggerClick : function() {
						var op = this.ownerCt.ownerCt.ownerCt.ownerCt;
						var EnterpriseNameStockUpdateNew = function(obj) {
							if (null != obj.orgName && "" != obj.orgName){
								op.getCmpByName('departMentName_EQ').setValue(obj.orgName);
							}
						}
						selectShop(EnterpriseNameStockUpdateNew);
					}
				}] 
			},{
				columnWidth : .2,
				layout : 'form',
				border : false,
				labelAlign : 'right',
				style : 'padding-left:15px;',
				labelWidth:90,
				items : [{
					name : 'customerManagerName_EQ',
					xtype : 'combo',
					fieldLabel : '客户经理',
					submitValue : true,
					triggerClass : 'x-form-search-trigger',
					readOnly : this.isReadOnly,
					editable : false,
					scope : this,
					anchor : '100%',
					onTriggerClick : function() {
						var obj = this;
						if ("" == obj.getValue()) {
							userIds = "";
						}
						new UserDialog({
							userName : obj.getValue(),
							single : true,
							title : "选择客户经理",
							callback : function(uId, uname) {
								obj.setValue(uname);
							}
						}).show();
					}
				}] 
			},{
				columnWidth : .15,
				xtype : 'container',
				layout : 'form',
				defaults : {
					xtype : 'button'
				},
				style : 'padding-left:100px;',
				items : [{
					text : '查询',
					scope : this,
					iconCls : 'btn-search',
					handler:function(){
						commomClick(this.panel,this.url,reportKey,'');
					}
				}]
			},{
				columnWidth : .07,
				xtype : 'container',
				layout : 'form',
				defaults : {
					xtype : 'button'
				},
				style : 'padding-left:10px;',
				items : [{
					text : '重置',
					scope : this,
					iconCls : 'reset',
					handler:function(){
						this.panel.getForm().reset();
					}
				}]
			}]
		});
		
		var panel=Ext.getCmp('searchPanel'+reportKey);
		this.panel=Ext.getCmp('searchPanel'+reportKey);
		this.url=__ctxPath + '/system/reportCsInvestSumWealthReport.do';
		
		pdfButton.on('click', function(xlsButton) {
			commomClick(this.panel,this.url,reportKey,'pdf');
		}, this);
			
		htmlButton.on('click', function(htmlButton) {
		 	commomClick(this.panel,this.url,reportKey,'html');
		 }, this);
			
		 xlsButton.on('click', function(xlsButton) {
		 	commomClick(this.panel,this.url,reportKey,'xls');
		}, this);
	}
});