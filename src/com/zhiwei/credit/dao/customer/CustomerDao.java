package com.zhiwei.credit.dao.customer;
/*
 *  北京互融时代软件有限公司 OA办公管理系统   --  http://www.hurongtime.com
 *  Copyright (C) 2008-2011 zhiwei Software Company
*/
import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.customer.Customer;

/**
 * 
 * @author 
 *
 */
public interface CustomerDao extends BaseDao<Customer>{

	public boolean checkCustomerNo(String customerNo);
	
}