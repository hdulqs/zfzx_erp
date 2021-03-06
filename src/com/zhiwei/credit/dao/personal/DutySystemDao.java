package com.zhiwei.credit.dao.personal;
/*
 *  北京互融时代软件有限公司 OA办公管理系统   --  http://www.hurongtime.com
 *  Copyright (C) 2008-2011 zhiwei Software Company
*/
import java.util.List;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.personal.DutySystem;

/**
 * 
 * @author 
 *
 */
public interface DutySystemDao extends BaseDao<DutySystem>{
	/**
	 *  更新为非缺省
	 */
	public void updateForNotDefult();
	/**
	 * 取得缺省的班制
	 * @return
	 */
	public List<DutySystem> getDefaultDutySystem();
}