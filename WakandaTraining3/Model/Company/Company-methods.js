(model.Company.collectionMethods.totalRevenues = function () {				var totalRevenues = 0;				this.forEach(function(oneCompany) {					totalRevenues += oneCompany.revenues;				});								return totalRevenues;			}).scope = "public";