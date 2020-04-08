
class TemplateBuilder {

  static async verifyPermissions(){
    if (typeof navigator == 'undefined') {
      throw new Error('Can\'t enumerate devices, navigator is not present.');
    }
    var devices = await navigator.mediaDevices.enumerateDevices();
    return Array.isArray(devices) && devices.length != 0;
  }

  static buildInterface(drawSight) {
    var divOverlay = document.getElementById('plugin-overlay');
    var video = document.getElementById('video');

    if (divOverlay != null && video != null) {
      divOverlay.style.display = '';
      video.play();
    }
    else {
      divOverlay = document.createElement('div');
      divOverlay.id = 'plugin-overlay';
      divOverlay.style.position = 'absolute';
      divOverlay.style.top = 0;
      divOverlay.style.left = 0;
      divOverlay.style.bottom = 0;
      divOverlay.style.right = 0;
      divOverlay.style.backgroundColor = '#000';
      divOverlay.style.zIndex = 999;

      video = document.createElement('video');
      video.id = 'video';
      video.style.height = '100%';
      video.style.width = '100%';
      video.style.objectFit = 'cover';
      video.style.display = 'inline-block';
      video.style.position = 'absolute';

      divOverlay.appendChild(video);
      document.body.appendChild(divOverlay);

      var closeButton = document.createElement('div');
      closeButton.id ='close-button';
      var content = document.createTextNode('X');
      closeButton.appendChild(content);

      closeButton.style.backgroundColor = '#fff';
      closeButton.style.border = '3px solid #999';
      closeButton.style.borderRadius = '50px';
      closeButton.style.cursor = 'pointer';
      closeButton.style.display = 'inline-block';
      closeButton.style.fontWeight = 'bold';
      closeButton.style.position = 'absolute';
      closeButton.style.top = '10px';
      closeButton.style.right = '15px';
      closeButton.style.fontSize = '40px';
      closeButton.style.lineHeight = '50px';
      closeButton.style.width = '56px';
      closeButton.style.height = '56px';
      closeButton.style.textAlign = 'center';

      divOverlay.appendChild(closeButton);

      if(drawSight === true){
        var sight = document.createElement('div');
        sight.style.width = '100%';
        sight.style.height = '2px';
        sight.style.backgroundColor = '#F00';
        sight.style.position = 'absolute';
        sight.style.display = 'inline-block';
        sight.style.top = '50%';
        divOverlay.appendChild(sight);
      }
    }
  }
}

export default TemplateBuilder;
