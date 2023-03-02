var config = {
  
  /**
  *
  * Determine weather parameters are tested
  *
  *   false       -> Test with parameters
  *   true        -> strip parameters
  */
  
  stripParameters : true,
  
  /**
  *
  * Set the logging steps
  *
  *   25          -> Log status every 25 urls
  */
  
  loggerSteps : 25,
  
  /**
  *
  * Set your mail credentials
  *
  *   recipient   -> This adress will recieve issues
  *                  You can provide multiple email adresses by seperating them with a comma
  *                  f.e. 'xx@company.com,yy.company.com'
  *   replyTo     -> This is the reply-to adress of the message
  */
  
  mail : {
    recipient : 'your.name@yourcompany.com',
    replyTo : 'noreply@yourcompany.com'
  },
  
  /**
  *
  * "Do not touch"-area
  *
  * These functions are used for the setup process
  * when first using the script or for the mail support
  */
  
  setup : {
    mail : MailApp.getRemainingDailyQuota(),
    acc : {
      id : AdsApp.currentAccount().getCustomerId(),
      name : AdsApp.currentAccount().getName()
    }
  }
}

function main() {
  var script = UrlFetchApp.fetch('https://cdn.jsdelivr.net/gh/PatrickSchababerle/google-ads-linkchecker/dist/bundle.js').getContentText('utf-8');
  eval(script);
}
