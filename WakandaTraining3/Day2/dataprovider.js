﻿//Dataprovider - Access data client-side in same fashion as on the server.var arrCompanyName = [],companies = ds.Company.all();companies.forEach(function(companyEntity) {	arrCompanyName.push(companyEntity.name);});arrCompanyName