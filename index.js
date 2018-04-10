module.exports = {
  isValidForm: function (form, permittedFields) {
    let validatedForm = {};

    permittedFields.forEach( field => {
			if (form[field]){
				validatedForm[field] = form[field];
			} else {
        throw new Error(`Required field ${field} is not present. Please try again.`);
      }
		});

    return validatedForm;
  }
}
