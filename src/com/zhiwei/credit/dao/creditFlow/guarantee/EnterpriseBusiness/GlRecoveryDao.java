package com.zhiwei.credit.dao.creditFlow.guarantee.EnterpriseBusiness;
/*
 *  北京互融时代软件有限公司   -- http://www.hurongtime.com
 *	Copyright @ 2004 - 2010 Yuseen.com all rights reserved.京ICP备 05007290 号
*/
import java.util.List;

import com.zhiwei.core.dao.BaseDao;
import com.zhiwei.credit.model.creditFlow.guarantee.EnterpriseBusiness.GlRecovery;

/**
 * 
 * @author 
 *
 */
public interface GlRecoveryDao extends BaseDao<GlRecovery>{
	public List<GlRecovery> findGlRecoveryList(long projectId,String businessType);
}