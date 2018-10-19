const shell = require('node-powershell');

const getEthernetMac = () => {
  return new Promise((resolve, reject) => {
      let ps = new shell({
          executionPolicy: 'Bypass',
          noProfile: true
      });

      const cmd = `Get-CimInstance win32_networkadapterconfiguration | select description, macaddress | where {$_.MACAddress -ne $null } | where {$_.Description -match "Realtek"}`;

      ps.addCommand(cmd);
      ps.invoke()
          .then(output => {
              const macAddress = output.toString().match(/([0-9A-F]{2}:?){6}/g)[0].replace(/:/g, '-');
              resolve(macAddress);
          })
          .catch(err => {
              console.log(err);
              ps.dispose();
              reject(err);
          });
  });
};


module.exports = {
    getEthernetMac
};