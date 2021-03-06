/**
 * @author lisl
 * @extends Ext.Panel
 * @description 小贷项目管理
 * @company 智维软件
 * @createtime:
 */
LoanFiveLevelClassification = Ext.extend(Ext.Panel, {
	// 构造函数
	constructor : function(_cfg) {
		Ext.applyIf(this, _cfg);
		// 初始化组件
		this.initUIComponents();

		// 调用父类构造
		LoanFiveLevelClassification.superclass.constructor.call(this, {
			id : 'LoanFiveLevelClassification',
			title : "贷款五级分类",
			region : 'center',
			layout : 'border',
			iconCls:"btn-tree-team36",
			items : [this.searchPanel, this.gridPanel]
		});
	},// end of constructor
	// 初始化组件
	initUIComponents : function() {
		this.searchPanel = new Ext.FormPanel({
			layout : 'column',
			region : 'north',
			border : false,
			height : 70,
			anchor : '96%',
			layoutConfig: {
               align:'middle'
            },
             bodyStyle : 'padding:10px 10px 10px 10px',
            items : [{
					name : 'projectStatus',
					xtype : 'hidden',
					value : 1
				}, {
					name : 'isGrantedShowAllProjects',
					xtype : 'hidden',
					value : this.isGrantedShowAllProjects
				},{
					columnWidth : 1,
					layout : 'column',
					border : false,
					items : [{
			     		columnWidth :.2,
						layout : 'form',
						labelWidth : 80,
						labelAlign : 'right',
						border : false,
						items : [{
						xtype : "diccombo",
						fieldLabel : '五级分类',
						hiddenName : 'superviseManageOpinion',
						itemName : '监管意见', // xx代表分类名称
						isDisplayItemName : false,
						editable : false,
						value : null,
						//emptyText : "请选择",
						anchor : '100%',
						listeners : {
							afterrender : function(combox) {
								var st = combox.getStore();
								st.on("load", function() {
									combox.clearInvalid();
									if (combox.getValue() > 0) {
										combox.setValue(combox.getValue());
									}
								})
							}
						}
					}]
		     		},{
			     		columnWidth :.2,
						layout : 'form',
						labelWidth : 80,
						labelAlign : 'right',
						border : false,
						items:[{
							fieldLabel : "客户类型",
							xtype : "dicIndepCombo",
							displayField : 'itemName',
							nodeKey : 'customerType',
							editable : false,
							anchor : "100%",
							hiddenName : 'oppositeType'
							
						}]
	     			},{
			     		columnWidth :.24,
						layout : 'form',
						labelWidth : 80,
						labelAlign : 'right',
						border : false,
						items : [{
							fieldLabel : '项目编号',
							name : 'projectNumber',
							anchor : "100%",
							xtype : 'textfield'
						}]
		     		},{
			     		columnWidth :.24,
						layout : 'form',
						labelWidth : 80,
						labelAlign : 'right',
						border : false,
						items :[{
							fieldLabel : '项目名称',
							name : 'projectName',
							anchor : "100%",
							xtype : 'textfield'
						}]
		     		},{
		     			columnWidth :.07,
						layout : 'form',
						border : false,
						labelWidth :80,
						items :[{
							text : '查询',
							xtype : 'button',
							scope : this,
							style :'margin-left:30px',
							anchor : "90%",
							iconCls : 'btn-search',
							handler : this.search
						}]
	     			}]
					},{
	     			columnWidth :.2,
					layout : 'form',
					labelWidth : 80,
					labelAlign : 'right',
					border : false,
					items :[{
						name : 'businessManager',
						xtype : 'trigger',
						fieldLabel : '项目经理',
						submitValue : true,
						triggerClass : 'x-form-search-trigger',
						editable : false,
						scope : this,
						anchor : "100%",
						onTriggerClick : function() {
							var obj = this;
							var appuerIdObj = obj.nextSibling();
							var userIds = appuerIdObj.getValue();
							if ("" == obj.getValue()) {
								userIds = "";
							}
							new UserDialog({
								userIds : userIds,
								userName : obj.getValue(),
								single : false,
								title : "选择项目经理",
								callback : function(uId, uname) {
									obj.setValue(uId);
									obj.setRawValue(uname);
									appuerIdObj.setValue(uId);
								}
							}).show();

						}
					}, {
						xtype : "hidden",
						name : 'Q_businessManager_S_LK'
					}]
	     		},{
	     			columnWidth :.2,
					layout : 'form',
					labelWidth : 80,
					labelAlign : 'right',
					border : false,
					items :[{
						fieldLabel : '放款日期',
						name : 'startDate1',
						xtype : 'datefield',
						format : 'Y-m-d',
						anchor : '100%'
							
				   	}]
	     			},{
	     			columnWidth :.48,
					layout : 'form',
					labelWidth : 80,
					labelAlign : 'right',
					border : false,
					items :[ {
						fieldLabel : '到',
						name : 'startDate2',
						xtype : 'datefield',
						format : 'Y-m-d',
						anchor : '50%'
					}]
	     			},{
	     			columnWidth :.07,
					layout : 'form',
					border : false,
					items :[{
						text : '重置',
						style :'margin-left:30px',
						xtype : 'button',
						scope : this,
						width : 30,
						iconCls : 'btn-reset',
						handler : this.reset
					}]
	     		}]
		});
		
			this.topbar = new Ext.Toolbar({
				items : [{
					iconCls : 'btn-xls',
					text : '导出excel',
					xtype : 'button',
					scope : this,
					handler : this.toExcel
				} ,'-', {
					iconCls : 'btn-detail',
					text : '贷款详细',
					xtype : 'button',
					scope : this,
					handler : function() {
						detailPro(this.gridPanel, 'SmallLoanProjectInfo_')
					}
				}]
			})
		var summary = new Ext.ux.grid.GridSummary();
				function totalMoney(v, params, data) {
					return '总计（元）';
				}
		this.gridPanel = new HT.GridPanel({
			name : 'SmallProjectGrid',
			region : 'center',
			tbar : this.topbar,
			plugins : [summary],
			notmask : true,
			// 不适用RowActions
			rowActions : false,
			url : __ctxPath + "/fund/bpProjectListBpFundProject.do",
			baseParams : {
				'projectStatus' : 1
			},
			fields : [{
				name : 'id',
				type : 'long'
			}, 'projectId','orgName', 'subject', 'creator', 'userId', 'projectName',
					'projectNumber', 'defId', 'runStatus', 'projectMoney',
					'payProjectMoney', 'oppositeType', 'oppositeTypeValue',
					'customerName', 'projectStatus', 'operationType',
					'operationTypeValue', 'taskId', 'activityName',
					'oppositeId', 'businessType', 'startDate', 'endDate',
					'superviseOpinionName', 'supervisionPersonName',
					'processName', 'appUserName', 'breachComment',
					'accrualtype', 'expectedRepaymentDate', 'payintentPeriod',
					'accrual','managementConsultingOfRate','executor','processName','intentDate','supEndDate','businessType',
					'departMentName','departId','ownJointMoney','productId','runId','isOtherFlow','superviseManageOpinionValue'],

			columns : [{
				header : '项目名称',
				width : 180,
				summaryRenderer : totalMoney,
				dataIndex : 'projectName'
			},{
				header : '项目金额（元）',
				width : 110,
				sortable : true,
				align:'right',
				 summaryType : 'sum',
				dataIndex : 'ownJointMoney',
				renderer : function(value) {
					if (value == "") {
						return "0.00";
					} else {
						return Ext.util.Format.number(value, ',000,000,000.00');
					}
				}
			},{
				header : '项目经理',
				width : 80,
				align:'center',
				dataIndex : 'appUserName'
			},{
				header : '开始时间',
				width : 80,
				align:'center',
				dataIndex : 'startDate'
			},{
				header : '结束时间',
				width : 80,
				align:'center',
				dataIndex : 'intentDate'
			},{
				header : '五级分类',
				width : 80,
				align:'center',
				dataIndex : 'superviseManageOpinionValue',
				renderer : function(value) {
					if (value == "") {
						return "正常贷款";
					} else {
						return value;
					}
				}
			}]
		});
		this.gridPanel.addListener('afterrender', function() {
			this.loadMask1 = new Ext.LoadMask(this.gridPanel.getEl(), {
				msg : '正在加载数据中······,请稍候······',
				store : this.gridPanel.store,
				removeMask : true
					// 完成后移除
					});
			this.loadMask1.show(); // 显示

		}, this);
	},
	
		// 查看意见与说明记录 
	flowRecords : function() {
		var selRs = this.gridPanel.getSelectionModel().getSelections();
		if (selRs.length == 0) {
			Ext.ux.Toast.msg('操作信息', '请选择记录！');
			return;
		}
		if (selRs.length > 1) {
			Ext.ux.Toast.msg('操作信息', '只能选择一条记录！');
			return;
		}
		var runId =selRs[0].get('runId');
		var businessType=selRs[0].get('businessType');
		new SlProcessRunView({
						runId : runId,
						businessType : businessType
					}).show();
	},
	// 重置查询表单
	reset : function() {
		this.searchPanel.getForm().reset();
		/*this.searchPanel.getCmpByName('projectStatus').setValue(this.projectStatus);
		this.searchPanel.getCmpByName('isGrantedShowAllProjects').setValue(this.isGrantedShowAllProjects);*/
	},
	// 按条件搜索
	search : function() {
		$search({
			searchPanel : this.searchPanel,
			gridPanel : this.gridPanel
		});
	},
	
	//导出到Excel
	toExcel:function(){
		var superviseManageOpinion=this.searchPanel.getCmpByName('superviseManageOpinion').getValue();
		var oppositeType=this.searchPanel.getCmpByName('oppositeType').getValue();
		var projectNumber=this.searchPanel.getCmpByName('projectNumber').getValue();
		var projectName=this.searchPanel.getCmpByName('projectName').getValue();
		var businessManager=this.searchPanel.getCmpByName('businessManager').getValue();
		var startDate1=this.searchPanel.getCmpByName('startDate1').getValue();
		var startDate2=this.searchPanel.getCmpByName('startDate2').getValue();
		window.open(__ctxPath + '/fund/bpProjectListToExcelBpFundProject.do?' 
				+'superviseManageOpinion='+superviseManageOpinion
				+'&oppositeType='+oppositeType
				+"&projectNumber="+projectNumber
				+"&projectName="+projectName
				+"&businessManager="+businessManager
				+"&startDate1="+startDate1
				+"&startDate2="+startDate2
		);
	}
});
