# Conectando SOAP WebServices utilizando Loopback

### Pre Requisites

`npm install -g loopback-cli`  

### Create a LoopBack application

The first step is to create a new LoopBack application. For example:

`$ lb app soap-demo`  

When prompted, select either LoopBack 3.x or 2.x and `empty-server` application.

### Generate SOAP data source

Create a new data source using the data source generator:  

`$ cd soap-demo`  
`$ lb datasource`

When prompted, respond as follows:

 * Enter the data-source name, for example “periodicSoapDS”.
 * Select “Soap Webservices (supported by StrongLoop)” from the list of connectors.
 * Enter http://www.webservicex.net/periodictable.asmx for “URL to the SOAP web service endpoint” prompt.
 * Enter http://www.webservicex.net/periodictable.asmx?WSDL for “HTTP URL or local fie system path to WSDL file” prompt.
 * Enter “y” to Expose operations as REST APIs.
 * Leave blank to “Maps WSDL binding operations to Node.js methods”.
 * Select “y” to “Install “loopback-connector-soap” prompt. This runs `npm install -s loopback-connector-soap`.

### Generate APIs from the SOAP data source  
  
```
$ lb soap
? Select the datasource for SOAP discovery
❯ periodicSoapDS
? Select the service: periodictable
```  

After you choose a service, the tool discovers and lists the bindings in the selected service (in this example, there are two: periodictableSoap and periodictableSoap12).
Select the periodictableSoap binding.

`? Select the binding: periodictableSoap`  

After you choose a binding, the tool discovers and lists SOAP operations that the selected binding defines. Press the space bar to select all of the listed SOAP operations.

```
◉ GetAtoms
◉ GetAtomicWeight
◉ GetAtomicNumber
❯◉ GetElementSymbol
```  

After you choose one more more operations, the tool generates remote methods and a REST API that can invoke the web service at http://www.webservicex.net/periodictable.asmx

### Run the application

To run the application:   

`node .`  

..(d[-_-]b)..