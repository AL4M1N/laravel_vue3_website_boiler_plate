export default {

    // Create Data
    createData() {
        this.$Progress.start();
        this.dataLodaing = true;
        // request send and get response
        this.form.post(this.currentUrl + '/store').then(response => {
            // Input field make empty
            this.resetForm();
            console.log(this.resetForm());

            this.dataLodaing = false;
            this.$Progress.finish();

            Swal.fire({
                icon: response.data.icon,
                title: response.data.msg
            });

        }).catch(error => {
            Swal.fire("Failed!", data.message, "warning");
        });
    },


    // reset form
    resetForm() {
        this.form.reset();
        this.$refs.form.resetValidation();
        this.form.errors.clear();
    }

}