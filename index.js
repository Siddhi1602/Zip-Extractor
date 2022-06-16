async function myFunction(){
    const typeoffile = {
        types: [
          {
            description: 'File',
            accept: {
              'File/*': ['.zip','.pdf','.txt']
            }
          },
        ],
        excludeAcceptAllOption: true,
        multiple: false
      };
    let [fileHandle] =await window.showOpenFilePicker(typeoffile);
    console.log(fileHandle);
}

/*function dropHandler(ev) {
    console.log('File(s) dropped');
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (ev.dataTransfer.items[i].kind === 'file') {
          const file = ev.dataTransfer.items[i].getAsFile();
          console.log('... file[' + i + '].name = ' + file.name);
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < ev.dataTransfer.files.length; i++) {
        console.log('... file[' + i + '].name = ' + ev.dataTransfer.files[i].name);
      }
    }
  }*/