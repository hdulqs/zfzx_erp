/*
 * An XML document type.
 * Localname: feeAccrDataResponse
 * Namespace: http://webservice.crd.itf.nc/IZyhtWebService
 * Java type: nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument
 *
 * Automatically generated - do not modify.
 */
package nc.itf.crd.webservice.izyhtwebservice;


/**
 * A document containing one feeAccrDataResponse(@http://webservice.crd.itf.nc/IZyhtWebService) element.
 *
 * This is a complex type.
 */
public interface FeeAccrDataResponseDocument extends org.apache.xmlbeans.XmlObject
{
    public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
        org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(FeeAccrDataResponseDocument.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s6607560D1AA176E9637C63A88AD4B5EC").resolveHandle("feeaccrdataresponse6259doctype");
    
    /**
     * Gets the "feeAccrDataResponse" element
     */
    nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument.FeeAccrDataResponse getFeeAccrDataResponse();
    
    /**
     * Sets the "feeAccrDataResponse" element
     */
    void setFeeAccrDataResponse(nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument.FeeAccrDataResponse feeAccrDataResponse);
    
    /**
     * Appends and returns a new empty "feeAccrDataResponse" element
     */
    nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument.FeeAccrDataResponse addNewFeeAccrDataResponse();
    
    /**
     * An XML feeAccrDataResponse(@http://webservice.crd.itf.nc/IZyhtWebService).
     *
     * This is a complex type.
     */
    public interface FeeAccrDataResponse extends org.apache.xmlbeans.XmlObject
    {
        public static final org.apache.xmlbeans.SchemaType type = (org.apache.xmlbeans.SchemaType)
            org.apache.xmlbeans.XmlBeans.typeSystemForClassLoader(FeeAccrDataResponse.class.getClassLoader(), "schemaorg_apache_xmlbeans.system.s6607560D1AA176E9637C63A88AD4B5EC").resolveHandle("feeaccrdataresponse3acbelemtype");
        
        /**
         * Gets array of all "return" elements
         */
        java.lang.String[] getReturnArray();
        
        /**
         * Gets ith "return" element
         */
        java.lang.String getReturnArray(int i);
        
        /**
         * Gets (as xml) array of all "return" elements
         */
        org.apache.xmlbeans.XmlString[] xgetReturnArray();
        
        /**
         * Gets (as xml) ith "return" element
         */
        org.apache.xmlbeans.XmlString xgetReturnArray(int i);
        
        /**
         * Tests for nil ith "return" element
         */
        boolean isNilReturnArray(int i);
        
        /**
         * Returns number of "return" element
         */
        int sizeOfReturnArray();
        
        /**
         * Sets array of all "return" element
         */
        void setReturnArray(java.lang.String[] xreturnArray);
        
        /**
         * Sets ith "return" element
         */
        void setReturnArray(int i, java.lang.String xreturn);
        
        /**
         * Sets (as xml) array of all "return" element
         */
        void xsetReturnArray(org.apache.xmlbeans.XmlString[] xreturnArray);
        
        /**
         * Sets (as xml) ith "return" element
         */
        void xsetReturnArray(int i, org.apache.xmlbeans.XmlString xreturn);
        
        /**
         * Nils the ith "return" element
         */
        void setNilReturnArray(int i);
        
        /**
         * Inserts the value as the ith "return" element
         */
        void insertReturn(int i, java.lang.String xreturn);
        
        /**
         * Appends the value as the last "return" element
         */
        void addReturn(java.lang.String xreturn);
        
        /**
         * Inserts and returns a new empty value (as xml) as the ith "return" element
         */
        org.apache.xmlbeans.XmlString insertNewReturn(int i);
        
        /**
         * Appends and returns a new empty value (as xml) as the last "return" element
         */
        org.apache.xmlbeans.XmlString addNewReturn();
        
        /**
         * Removes the ith "return" element
         */
        void removeReturn(int i);
        
        /**
         * A factory class with static methods for creating instances
         * of this type.
         */
        
        public static final class Factory
        {
            public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument.FeeAccrDataResponse newInstance() {
              return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument.FeeAccrDataResponse) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
            
            public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument.FeeAccrDataResponse newInstance(org.apache.xmlbeans.XmlOptions options) {
              return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument.FeeAccrDataResponse) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
            
            private Factory() { } // No instance of this class allowed
        }
    }
    
    /**
     * A factory class with static methods for creating instances
     * of this type.
     */
    
    public static final class Factory
    {
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument newInstance() {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument newInstance(org.apache.xmlbeans.XmlOptions options) {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newInstance( type, options ); }
        
        /** @param xmlAsString the string value to parse */
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.lang.String xmlAsString) throws org.apache.xmlbeans.XmlException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.lang.String xmlAsString, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xmlAsString, type, options ); }
        
        /** @param file the file from which to load an xml document */
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.io.File file) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.io.File file, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( file, type, options ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.net.URL u) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.net.URL u, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( u, type, options ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.io.InputStream is) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.io.InputStream is, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( is, type, options ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.io.Reader r) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(java.io.Reader r, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, java.io.IOException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( r, type, options ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(javax.xml.stream.XMLStreamReader sr) throws org.apache.xmlbeans.XmlException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(javax.xml.stream.XMLStreamReader sr, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( sr, type, options ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(org.w3c.dom.Node node) throws org.apache.xmlbeans.XmlException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, null ); }
        
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(org.w3c.dom.Node node, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( node, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument parse(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return (nc.itf.crd.webservice.izyhtwebservice.FeeAccrDataResponseDocument) org.apache.xmlbeans.XmlBeans.getContextTypeLoader().parse( xis, type, options ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, null ); }
        
        /** @deprecated {@link org.apache.xmlbeans.xml.stream.XMLInputStream} */
        public static org.apache.xmlbeans.xml.stream.XMLInputStream newValidatingXMLInputStream(org.apache.xmlbeans.xml.stream.XMLInputStream xis, org.apache.xmlbeans.XmlOptions options) throws org.apache.xmlbeans.XmlException, org.apache.xmlbeans.xml.stream.XMLStreamException {
          return org.apache.xmlbeans.XmlBeans.getContextTypeLoader().newValidatingXMLInputStream( xis, type, options ); }
        
        private Factory() { } // No instance of this class allowed
    }
}
