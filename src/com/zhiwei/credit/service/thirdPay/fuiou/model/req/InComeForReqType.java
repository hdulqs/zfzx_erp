//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, vhudson-jaxb-ri-2.2-147 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2011.12.26 at 08:42:13 ���� CST 
//


package com.zhiwei.credit.service.thirdPay.fuiou.model.req;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for InComeForReqType complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="InComeForReqType">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ver" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="merdt" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="orderno" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="bankno" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="accntno" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="accntnm" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="amt" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="entseq" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="memo" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="mobile" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="certtp" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="certno" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "InComeForReqType", propOrder = {
    "ver",
    "merdt",
    "orderno",
    "bankno",
    "accntno",
    "accntnm",
    "amt",
    "entseq",
    "memo",
    "mobile",
    "certtp",
    "certno"
})
public class InComeForReqType {

    protected String ver;
    protected String merdt;
    protected String orderno;
    protected String bankno;
    protected String accntno;
    protected String accntnm;
    protected String amt;
    protected String entseq;
    protected String memo;
    protected String mobile;
    protected String certtp;
    protected String certno;

    /**
     * Gets the value of the ver property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getVer() {
        return ver;
    }

    /**
     * Sets the value of the ver property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setVer(String value) {
        this.ver = value;
    }

    /**
     * Gets the value of the merdt property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMerdt() {
        return merdt;
    }

    /**
     * Sets the value of the merdt property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMerdt(String value) {
        this.merdt = value;
    }

    /**
     * Gets the value of the orderno property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getOrderno() {
        return orderno;
    }

    /**
     * Sets the value of the orderno property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setOrderno(String value) {
        this.orderno = value;
    }

    /**
     * Gets the value of the bankno property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getBankno() {
        return bankno;
    }

    /**
     * Sets the value of the bankno property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setBankno(String value) {
        this.bankno = value;
    }

    /**
     * Gets the value of the accntno property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAccntno() {
        return accntno;
    }

    /**
     * Sets the value of the accntno property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAccntno(String value) {
        this.accntno = value;
    }

    /**
     * Gets the value of the accntnm property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAccntnm() {
        return accntnm;
    }

    /**
     * Sets the value of the accntnm property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAccntnm(String value) {
        this.accntnm = value;
    }

    /**
     * Gets the value of the amt property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getAmt() {
        return amt;
    }

    /**
     * Sets the value of the amt property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setAmt(String value) {
        this.amt = value;
    }

    /**
     * Gets the value of the entseq property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getEntseq() {
        return entseq;
    }

    /**
     * Sets the value of the entseq property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setEntseq(String value) {
        this.entseq = value;
    }

    /**
     * Gets the value of the memo property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMemo() {
        return memo;
    }

    /**
     * Sets the value of the memo property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMemo(String value) {
        this.memo = value;
    }

    /**
     * Gets the value of the mobile property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getMobile() {
        return mobile;
    }

    /**
     * Sets the value of the mobile property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setMobile(String value) {
        this.mobile = value;
    }

    /**
     * Gets the value of the certtp property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCerttp() {
        return certtp;
    }

    /**
     * Sets the value of the certtp property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCerttp(String value) {
        this.certtp = value;
    }

    /**
     * Gets the value of the certno property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCertno() {
        return certno;
    }

    /**
     * Sets the value of the certno property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCertno(String value) {
        this.certno = value;
    }

}