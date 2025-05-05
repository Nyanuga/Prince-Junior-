
async function generateTempEmail() {
    try {
        const response = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox");
        if (response.data.length > 0) {
            return response.data[0]; // Returns a randomly generated email
        }
        throw new Error("Email generation failed.");
    } catch (error) {
        console.error("Error generating email:", error);
        return null;
    }
}

async function checkEmailInbox(email) {
    if (!email) return [];

    const [login, domain] = email.split("@");
    try {
        const response = await axios.get(`https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`);
        return response.data;
    } catch (error) {
        console.error("Error checking inbox:", error);
        return [];
    }
}
//========================================================================//
function getCountryName(code) {
  const countryNames = {
    US: 'United States',
    NG: 'Nigeria',
    IN: 'India',
    CN: 'China',
    BR: 'Brazil',
    PK: 'Pakistan',
    BD: 'Bangladesh',
    RU: 'Russia',
    JP: 'Japan',
    DE: 'Germany',
    FR: 'France',
    GB: 'United Kingdom',
    IT: 'Italy',
    ES: 'Spain',
    CA: 'Canada',
    MX: 'Mexico',
    ID: 'Indonesia',
    TR: 'Turkey',
    VN: 'Vietnam',
    EG: 'Egypt',
    TH: 'Thailand',
    IR: 'Iran',
    ZA: 'South Africa',
    KE: 'Kenya',
    AR: 'Argentina',
    CO: 'Colombia',
    PE: 'Peru',
    CL: 'Chile',
    UA: 'Ukraine',
    PL: 'Poland',
    NL: 'Netherlands',
    BE: 'Belgium',
    SE: 'Sweden',
    NO: 'Norway',
    DK: 'Denmark',
    FI: 'Finland',
    PH: 'Philippines',
    MY: 'Malaysia',
    KR: 'South Korea',
    SA: 'Saudi Arabia',
    AE: 'United Arab Emirates',
    IQ: 'Iraq',
    SY: 'Syria',
    MA: 'Morocco',
    DZ: 'Algeria',
    ET: 'Ethiopia',
    GH: 'Ghana',
    TZ: 'Tanzania',
    UG: 'Uganda',
    SD: 'Sudan',
    NZ: 'New Zealand',
    AU: 'Australia',
    GR: 'Greece',
    PT: 'Portugal',
    CH: 'Switzerland',
    AT: 'Austria',
    CZ: 'Czech Republic',
    RO: 'Romania',
    HU: 'Hungary',
    IL: 'Israel',
    SG: 'Singapore',
    HK: 'Hong Kong',
    TW: 'Taiwan'
  };

  return countryNames[code] || code;
}
//=============================================================================================//



const sendFakeVirusWarning = async (client, m) => {
    try {
        const warningMessages = [
            "⚠️ *WARNING! CRITICAL SECURITY ALERT!* ⚠️",
            "🚨 *Your device has been compromised!* 🚨",
            "🦠 *Virus Detected: Trojan.MpesaStealer.001*",
            "📛 *Unauthorized access detected!*",
            "📡 *Scanning system for potential threats...*",
            "⏳ *Analyzing device security...*",
            "📝 *Suspicious activity found in your WhatsApp data!*",
            "🛑 *Warning! Banking details may be exposed!*",
            "📂 *Malware is attempting to access your phone storage!*",
            "📤 *Uploading your contacts and messages to the dark web...*",
            "🔄 *Deleting personal files...*",
            "💀 *System error: Critical process terminated!*",

function loadChatData(remoteJid, messageId) {
  const chatFilePath = path.join(baseDir, remoteJid, `${messageId}.json`);
  try {
    const data = fs.readFileSync(chatFilePath, 'utf8');
    return JSON.parse(data) || [];
  } catch (error) {
    return [];
  }
}

function saveChatData(remoteJid, messageId, chatData) {
  const chatDir = path.join(baseDir, remoteJid);

  if (!fs.existsSync(chatDir)) {
    fs.mkdirSync(chatDir, { recursive: true });
  }

  const chatFilePath = path.join(chatDir, `${messageId}.json`);

  try {
    fs.writeFileSync(chatFilePath, JSON.stringify(chatData, null, 2));
  } catch (error) {
    console.error('Error saving chat data:', error);
  }
}
  // Log for debugging: print target and message
        console.log(`Bug command target: ${target}`);
        console.log(`Bug command message: ${messageText}`);
        
        // Forward the message to the target number.
        await client.sendMessage(target, { text: messageText });
        
        // Send confirmation back to the sender.
        m.reply("✅ Bug command executed successfully and message forwarded to the target number.");
    } catch (error) {
        console.error("Error in bugTargetOtherNumber:", error);
        m.reply("⚠️ An error occurred while executing the bug command.");
    }
}
    // Push Message To Console
    let argsLog = budy.length > 30 ? `${q.substring(0, 30)}...` : budy;

const Grace = mek.key.remoteJid;
if (wapresence === 'online') { 
             client.sendPresenceUpdate('available', Grace);
	
} else if (wapresence === 'typing') { 
             client.sendPresenceUpdate('composing', Grace);
	
      }	else if (wapresence === 'recording') { 
             client.sendPresenceUpdate('recording', Grace);
             
    } else {
             client.sendPresenceUpdate('unavailable', Grace);
    }
    
    if (cmd) {
      switch (command) {
        case "mzazi2": case "menu2":
		      await mp3d ()
		      
let cap = `𝗛𝗲𝘆 ${m.pushName}😁, ${getGreeting()}\n\n𝐓𝐡𝐢𝐬 𝐢𝐬 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃, 𝐜𝐫𝐞𝐚𝐭𝐞𝐝 𝐛𝐲 𝐌𝐳𝐚𝐳𝐢\n\n╭═════〘 𝐌𝐙𝐀𝐙𝐈-𝐗𝐌𝐃 〙═════╮
╭═─────────────────═╮
│ 𝗨𝘀𝗲𝗿 : ${m.pushName}
│ 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 : 𝐉𝐔𝐍𝐈𝐎𝐑
│ 𝗣𝗿𝗲𝗳𝗶𝘅 : ${prefix}
│ 𝗠𝗼𝗱𝗲 : ${mode}
│ 𝗦𝗽𝗲𝗲𝗱 :   ${dreadedspeed.toFixed(4)} 𝗠𝘀
│ 𝗧𝗶𝗺𝗲 : ${getCurrentTimeInNairobi()} on ${date.toLocaleString('en-US', { weekday: 'long', timeZone: 'Africa/Nairobi'})}
│ 𝗔𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗥𝗔𝗠 : 16𝗚𝗕 𝗼𝗳 32𝗚𝗕
│═════════════════════
│𝐓𝐇𝐈𝐒 𝐈𝐒 𝐏𝐑𝐈𝐍𝐂𝐄-𝐉𝐔𝐍𝐈𝐎𝐑 𝐁𝐎𝐓
‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎┃✫│═════════════════════
╰══──────────────────══╯
●════ 〘 𝐍𝐨𝐫𝐦𝐚𝐥 〙═──═●
╭══───────◇───────══╮
│ 𝐑𝐞𝐩𝐨
│ 𝐒𝐜
╰══───────◇───────══╯
●════ 〘 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝐂𝐌𝐃𝐒 〙═──═●
╭══───────◇───────══╮
│ 𝐕𝐢𝐝𝐞𝐨
│ 𝐏𝐥𝐚𝐲
│ 𝐋𝐲𝐫𝐢𝐜𝐬
│ 𝐏𝐥𝐚𝐲2
╰══───────◇───────══╯
𝐓𝐡𝐚𝐧𝐤𝐬 𝐭𝐨:
𝐌𝐙𝐀𝐙𝐈 (𝐁𝐨𝐭 𝐁𝐚𝐬𝐞)
𝐎𝐭𝐡𝐞𝐫 𝐢𝐧𝐜𝐥𝐮𝐝𝐢𝐧𝐠 𝐲𝐨𝐮
 `;

if (menu === 'VIDEO') {

                   client.sendMessage(m.chat, {
                        video: fs.readFileSync('./Media/menu.mp4'),
                        caption: cap,
                        gifPlayback: true
                    }, {
                        quoted: m
                    })
                } else if (menu === 'TEXT') {
client.sendMessage(from, { text: cap}, {quoted: m})

} else if (menu === 'IMAGE') {
client.sendMessage(m.chat, { image: { url: 'https://i.imgur.com/A08nrWx.jpeg' }, caption: cap, fileLength: "9999999999"}, { quoted: m })
} else if (menu === 'LINK') {
client.sendMessage(m.chat, {
                        text: cap,
                        contextInfo: {
                            externalAdReply: {
                                showAdAttribution: true,
                                title: `PRINCE-JUNIOR`,
                                body: `${runtime(process.uptime())}`,
                                thumbnail: fs.readFileSync('./Media/mzazi.jpg'),
                                sourceUrl: 'https://wa.me/254741388986?text=Hello👋+Mzazi+Nihostie+Bot+Mkuu+😔',
                                mediaType: 1,
                                renderLargerThumbnail: true
                            }
                        }
                    }, {
                        quoted: m
                    })

}
          // Group Commands
break;



	      case 'video': {
const yts = require("yt-search");
const fetch = require("node-fetch"); 

  try { 
    if (!text) {
      return sendReply(client, m, "𝑷𝒍𝒆𝒂𝒔𝒆 𝒔𝒑𝒆𝒄𝒊𝒇𝒚 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖍𝖞 PRINCE-JUNIOR");
    }
 
    let search = await yts(text);
    if (!search.all.length) {
      return sendReply(client, m, "No results found for your query.");
    }
    let link = search.all[0].url; 

    const apiUrl = `https://apis-keith.vercel.app/download/dlmp4?url=${link}`;

    let response = await fetch(apiUrl);
    let data = await response.json();

    if (data.status && data.result) {
      const videoData = {
        title: data.result.title,
        downloadUrl: data.result.downloadUrl,
        thumbnail: search.all[0].thumbnail,
        format: data.result.format,
        quality: data.result.quality,
      };

      await client.sendMessage(
        m.chat,
        {
          video: { url: videoData.downloadUrl },
          mimetype: "video/mp4",
          caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕𝗬 PRINCE-JUNIOR",
        },
        { quoted: m }
      );

      return;
    } else {
      
      return reply(client, m, "𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒇𝒆𝒕𝒄𝒉 𝒕𝒉𝒆 𝒗𝒊𝒅𝒆𝒐. 𝑷𝒍𝒆𝒂𝒔𝒆 𝒕𝒓𝒚 𝒂𝒈𝒂𝒊𝒏 𝒍𝒂𝒕𝒆𝒓, 𝒎𝒛𝒂𝒛𝒊 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖😂.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");
    }
  } catch (error) {
 
    return reply(client, m, `An error occurred: ${error.message}`);
  }
};
  break;
		      case "advice":
reply(advice());
console.log(advice());

break;

case "owner": case "developer": case "dev":
client.sendContact(from, maindev2, m)
break;

		      case "lyrics2": 
 try { 
 if (!text) return reply("𝑷𝒓𝒐𝒗𝒊𝒅𝒆 𝒂 𝒔𝒐𝒏𝒈 𝒏𝒂𝒎𝒆!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR"); 
 const searches = await Client.songs.search(text); 
 const firstSong = searches[0]; 
 //await client.sendMessage(from, {text: firstSong}); 
 const lyrics = await firstSong.lyrics(); 
 await client.sendMessage(from, { text: lyrics}, { quoted: m }); 
 } catch (error) { 
             reply(`𝑰 𝒅𝒊𝒅 𝒏𝒐𝒕 𝒈𝒊𝒏𝒅 𝒂𝒏𝒚 𝒍𝒚𝒓𝒊𝒄𝒔 𝒇𝒐𝒓 ${text}. 𝑻𝒓𝒚 𝒔𝒆𝒂𝒓𝒄𝒉𝒊𝒏𝒈 𝒂 𝒅𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒔𝒐𝒏𝒈.\n\n> ©𝖕𝖔𝖜𝖊𝖗 𝖇𝖞 PRINCE-JUNIOR`); 
             console.log(error); 
         } 
 //const artist = await Client.artists.get(456537); 
 //await client.sendMessage(from, { text: artist} {quoted: m}); 
 // console.log("About the Artist:\n", artist, "\n"); 
 break;
        
	case "play2": {
 const yts = require("yt-search");

    try {
        if (!text) return m.reply("𝑾𝒉𝒂𝒕 𝒔𝒐𝒏𝒈 𝒅𝒐 𝒚𝒐𝒖 𝒘𝒂𝒏𝒕 𝒕𝒐 𝒅𝒐𝒘𝒏𝒍𝒐𝒂𝒅?\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");

        const { videos } = await yts(text);
        if (!videos || videos.length === 0) {
            return m.reply("𝑵𝒐 𝒔𝒐𝒏𝒈 𝒇𝒐𝒖𝒏𝒅!\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");
        }

        const urlYt = videos[0].url;

        try {
            let data = await fetchJson(`https://api.dreaded.site/api/ytdl/audio?url=${urlYt}`);

            const { title, format, url: audioUrl } = data.result;

            await client.sendMessage(
                m.chat,
                {
                    document: { url: audioUrl },
                    mimetype: "audio/mpeg",
		    caption: "𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗗 𝗕Y PRINCE-JUNIOR",
                    fileName: `${title}.mp3`,
                },
                { quoted: m }
            );
        } catch (error) {
            console.error("API request failed:", error.message);
            m.reply("𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝒇𝒂𝒊𝒍𝒆𝒅: 𝑼𝒏𝒂𝒃𝒍𝒆 𝒕𝒐 𝒓𝒆𝒕𝒓𝒊𝒆𝒗𝒆.\n\n> ©𝖕𝖔𝖜𝖊𝖗𝖊𝖉 𝖇𝖞 PRINCE-JUNIOR");
        }
    } catch (error) {
        m.reply("Download failed\n" + error.message);
    }
};
        break;


default: {
          if (cmd && budy.toLowerCase() != undefined) {
            if (m.chat.endsWith("broadcast")) return;
            if (m.isBaileys) return;
            if (!budy.toLowerCase()) return;
            if (argsLog || (cmd && !m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Mzazi", "turquoise"));
            } else if (argsLog || (cmd && m.isGroup)) {
              // client.sendReadReceipt(m.chat, m.sender, [m.key.id])
              console.log(chalk.black(chalk.bgRed("[ ERROR ]")), color("command", "turquoise"), color(`${prefix}${command}`, "turquoise"), color("Mzazi", "turquoise"));
            }
          }
        }
      }
    }
  } catch (err) {
    m.reply(util.format(err));
  }
};


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});



 
  
