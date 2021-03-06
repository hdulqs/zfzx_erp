/**
 * @author
 * @class GlAccountRecordView
 * @extends Ext.Panel
 * @description [GlAccountRecord]管理
 * @company 智维软件
 * @createtime:
 */
GlAccountRecordView = Ext.extend(Ext.Panel, {
			// 构造函数
			constructor : function(_cfg) {
				Ext.applyIf(this, _cfg);
				// 初始化组件
				this.initUIComponents();
				// 调用父类构造
				GlAccountRecordView.superclass.constructor.call(this, {
							id : 'GlAccountRecordView',
							title : '[GlAccountRecord]管理',
							region : 'center',
							layout : 'border',
							items : [this.searchPanel, this.gridPanel]
						});
			},// end of constructor
			// 初始化组件
			initUIComponents : function() {
				// 初始化搜索条件Panel
				this.searchPanel=new HT.SearchPanel({
							layout : 'form',
							region : 'north',
							colNums:3,
							items:[
																					 																													 								 								{
									fieldLabel:'cautionAccountId',
									name : 'Q_cautionAccountId_N_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																													 								 								{
									fieldLabel:'capitalType',
									name : 'Q_capitalType_N_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'oprateMoney',
									name : 'Q_oprateMoney_D_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'oprateDate',
									name : 'Q_oprateDate_D_EQ',
									flex:1,
																		xtype:'datefield',
									format:'Y-m-d'
																	}
																,
															 							 																																					 								{
									fieldLabel:'handlePerson',
									name : 'Q_handlePerson_S_EQ',
									flex:1,
																		xtype : 'textfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'remark',
									name : 'Q_remark_S_EQ',
									flex:1,
																		xtype : 'textfield'
																	}
																,
															 							 																													 								 								{
									fieldLabel:'servicetype',
									name : 'Q_servicetype_N_EQ',
									flex:1,
																		xtype:'numberfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'projectId',
									name : 'Q_projectId_S_EQ',
									flex:1,
																		xtype : 'textfield'
																	}
																,
															 							 																																					 								{
									fieldLabel:'csBankCautionMoneyId',
									name : 'Q_csBankCautionMoneyId_S_EQ',
									flex:1,
																		xtype : 'textfield'
																	}
															 							 							 															],
								buttons:[
									{
										text:'查询',
										scope:this,
										iconCls:'btn-search',
										handler:this.search
									},{
										text:'重置',
										scope:this,
										iconCls:'btn-reset',
										handler:this.reset
									}							
								]	
				});// end of searchPanel

				this.topbar = new Ext.Toolbar({
						items : [{
									iconCls : 'btn-add',
									text : '添加[GlAccountRecord]',
									xtype : 'button',
									scope : this,
									handler : this.createRs
								}, {
									iconCls : 'btn-del',
									text : '删除[GlAccountRecord]',
									xtype : 'button',
									scope:this,
									handler : this.removeSelRs
								}]
				});
	
				this.gridPanel=new HT.GridPanel({
					region:'center',
					tbar:this.topbar,
					//使用RowActions
					rowActions:true,
					id:'GlAccountRecordGrid',
					url : __ctxPath + "/creditFlow.guarantee.guaranteefinance/listGlAccountRecord.do",
					fields : [{
									name : 'id',
									type : 'int'
								}
																																																	,'cautionAccountId'
																																										,'capitalType'
																																										,'oprateMoney'
																																										,'oprateDate'
																																										,'handlePerson'
																																										,'remark'
																																										,'servicetype'
																																										,'projectId'
																																										,'csBankCautionMoneyId'
																																			],
					columns:[
								{
									header : 'id',
									dataIndex : 'id',
									hidden : true
								}
																																																								,{
																	header : 'cautionAccountId',	
																	dataIndex : 'cautionAccountId'
								}
																																																,{
																	header : 'capitalType',	
																	dataIndex : 'capitalType'
								}
																																																,{
																	header : 'oprateMoney',	
																	dataIndex : 'oprateMoney'
								}
																																																,{
																	header : 'oprateDate',	
																	dataIndex : 'oprateDate'
								}
																																																,{
																	header : 'handlePerson',	
																	dataIndex : 'handlePerson'
								}
																																																,{
																	header : 'remark',	
																	dataIndex : 'remark'
								}
																																																,{
																	header : 'servicetype',	
																	dataIndex : 'servicetype'
								}
																																																,{
																	header : 'projectId',	
																	dataIndex : 'projectId'
								}
																																																,{
																	header : 'csBankCautionMoneyId',	
																	dataIndex : 'csBankCautionMoneyId'
								}
																																								, new Ext.ux.grid.RowActions({
									header:'管理',
									width:100,
									actions:[{
											 iconCls:'btn-del',qtip:'删除',style:'margin:0 3px 0 3px'
										},{
											 iconCls:'btn-edit',qtip:'编辑',style:'margin:0 3px 0 3px'
										}
									],
									listeners:{
										scope:this,
										'action':this.onRowAction
									}
								})
					]//end of columns
				});
				
				this.gridPanel.addListener('rowdblclick',this.rowClick);
					
			},// end of the initComponents()
			//重置查询表单
			reset : function(){
				this.searchPanel.getForm().reset();
			},
			//按条件搜索
			search : function() {
				$search({
					searchPanel:this.searchPanel,
					gridPanel:this.gridPanel
				});
			},
			//GridPanel行点击处理事件
			rowClick:function(grid,rowindex, e) {
				grid.getSelectionModel().each(function(rec) {
					new GlAccountRecordForm({id:rec.data.id}).show();
				});
			},
			//创建记录
			createRs : function() {
				new GlAccountRecordForm().show();
			},
			//按ID删除记录
			removeRs : function(id) {
				$postDel({
					url:__ctxPath+ '/creditFlow.guarantee.guaranteefinance/multiDelGlAccountRecord.do',
					ids:id,
					grid:this.gridPanel
				});
			},
			//把选中ID删除
			removeSelRs : function() {
				$delGridRs({
					url:__ctxPath + '/creditFlow.guarantee.guaranteefinance/multiDelGlAccountRecord.do',
					grid:this.gridPanel,
					idName:'id'
				});
			},
			//编辑Rs
			editRs : function(record) {
				new GlAccountRecordForm({
					id : record.data.id
				}).show();
			},
			//行的Action
			onRowAction : function(grid, record, action, row, col) {
				switch (action) {
					case 'btn-del' :
						this.removeRs.call(this,record.data.id);
						break;
					case 'btn-edit' :
						this.editRs.call(this,record);
						break;
					default :
						break;
				}
			}
});
