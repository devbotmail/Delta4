// Owner number
global.owner = '13177997217'
// Owner name
global.owner_name = 'Delta'
// Maximum upload file size limit (Default : 1000 MB)
global.max_upload = 1000
// Delay for spamming protection (Default : 0 seconds)
global.cooldown = 0
// User Limitation (Default : 9999)
global.limit = 9999
// Time to be temporarily banned and others (Default : 30 minutes)
global.timer = 1800000
// Symbols that are excluded when adding a prefix (Don't change it)
global.evaluate_chars = ['=>', '~>', '<', '>', '$']
// Country code that will be automatically blocked by the system, when sending messages in private chat
global.blocks = ['91', '92', '212']
// Put target jid to forward friends story
global.forwards = '13177997217@c.us'
// Get neoxr apikey by registering at https://api.neoxr.my.id
global.Api = new (require('./neoxrApi'))(process.env.API_KEY)
// Get bid and key configuration for autoreply chat ai feature by registering at https://brainshop.ai
global.chatai_bid = '164728'
global.chatai_key = 'MKPsfkgXLZPGrWoH'
// Source version
global.version = '5.4.7',
// Footer text
global.footer = 'Delta'
// Global status
global.status = Object.freeze({
   wait: Func.texted('bold', 'Processed . . .'),
   invalid: Func.texted('bold', 'URL is Invalid!'),
   wrong: Func.texted('bold', 'Wrong format!'),
   getdata: Func.texted('bold', 'Scraping metadata . . .'),
   fail: Func.texted('bold', 'Can\'t get metadata!'),
   error: Func.texted('bold', 'Error occurred!'),
   errorF: Func.texted('bold', 'Sorry this feature is in error.'),
   premium: Func.texted('bold', 'This feature only for premium user.'),
   owner: Func.texted('bold', 'This command only for owner.'),
   god: Func.texted('bold', 'This command only for Master'),
   group: Func.texted('bold', 'This command will only work in groups.'),
   botAdmin: Func.texted('bold', 'This command will work when I become an admin.'),
   admin: Func.texted('bold', 'This command only for group admin.'),
   private: Func.texted('bold', 'Use this command in private chat.')
})
