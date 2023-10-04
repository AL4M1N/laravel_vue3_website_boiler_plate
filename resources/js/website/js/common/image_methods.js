export default {
    // Upload Image
    upload_image(e) {
        let file = e.target.files[0];
        let reader = new FileReader();

        if (file['size'] < this.imageMaxSize) {
            reader.onloadend = (file) => {
                //console.log('RESULT', reader.result)
                this.form.image = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            alert('File size can not be bigger than 2 MB')
        }
    },

    //For getting Instant Uploaded Photo
    get_image() {

        if (this.form.image) {
            let photo = (this.form.image.length > 100) ? this.form.image : this.imagePathSm + this.form.image;
            return photo;
        }
        return null;
    },


    // File Upload
    onFileChange(e) {
        let file = e.target.files[0];

        if (file['size'] < this.fileMaxSize) {
            this.form.document = file;
        } else {
            alert('File size can not be bigger than 5 MB')
        }
    },

    // image Upload by name
    uploadImageByName: function (event, currentFieldName) {

        let file = event;
        let reader = new FileReader();
        console.log('Image upload: ', file, file['size'])
        if (file['size'] < this.imageMaxSize) {
            reader.onloadend = (file) => {
                console.log('RESULT', reader.result)
                this.form[currentFieldName] = reader.result;
            }
            reader.readAsDataURL(file);
        } else {
            alert('File size can not be bigger than 2 MB')
        }


    },

    // document Upload by name
    uploadDocByNameWithAccept: function (event, currentFieldName, acceptType = ['jpg', 'png', 'jpeg', 'mp4']) {

        //console.log(event)
        let file = event;
        if (file) {
            let fileExt = file['name'].match(/\.(\w+)$/)?.[1];
            let matchFound = acceptType.includes(fileExt);
            let allErrors = {}
            let errorsMsgWithKey = {};
            let errMessage = "";
            if (!matchFound) {
                // join array with comma
                errMessage = 'Accept only ' + acceptType.join(", ") + '.';
                alert('File type not accepted')
            } else if (file['size'] > this.imageMaxSize) {
                errMessage = 'File size can not be bigger than ' + (this.imageMaxSize / 1024) / 1024 + ' MB';
                alert(errMessage)
            } else {
                errMessage = null
                // Assign Fine into form field
                this.form[currentFieldName] = file;
            }
            errorsMsgWithKey[currentFieldName] = errMessage
            allErrors['errors'] = errorsMsgWithKey
            // Assign in form error section 
            Object.assign(this.form.errors, allErrors);
        }
    },

    // Selected Image Show
    showImageByName(currentFieldName) {

        if (this.form[currentFieldName]) {
            let photo = (this.form[currentFieldName].length > 100) ? this.form[currentFieldName] : this
                .imagePathSm + this.form[currentFieldName];
            return photo;
        }
        return "/all-assets/common/img/no-image.png";
    },

}