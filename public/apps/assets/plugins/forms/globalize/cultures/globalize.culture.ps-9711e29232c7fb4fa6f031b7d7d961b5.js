!function(t){var e;e="undefined"!=typeof require&&"undefined"!=typeof exports&&"undefined"!=typeof module?require("globalize"):t.Globalize,e.addCultureInfo("ps","default",{name:"ps",englishName:"Pashto",nativeName:"\u067e\u069a\u062a\u0648",language:"ps",isRTL:!0,numberFormat:{pattern:["n-"],",":"\u060c",".":",",NaN:"\u063a \u0639",negativeInfinity:"-\u221e",positiveInfinity:"\u221e",percent:{pattern:["%n-","%n"],",":"\u060c",".":","},currency:{pattern:["$n-","$n"],",":"\u066c",".":"\u066b",symbol:"\u060b"}},calendars:{standard:{name:"Hijri",firstDay:6,days:{names:["\u0627\u0644\u0623\u062d\u062f","\u0627\u0644\u0625\u062b\u0646\u064a\u0646","\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062e\u0645\u064a\u0633","\u0627\u0644\u062c\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062a"],namesAbbr:["\u0627\u0644\u0623\u062d\u062f","\u0627\u0644\u0625\u062b\u0646\u064a\u0646","\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621","\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621","\u0627\u0644\u062e\u0645\u064a\u0633","\u0627\u0644\u062c\u0645\u0639\u0629","\u0627\u0644\u0633\u0628\u062a"],namesShort:["\u062d","\u0646","\u062b","\u0631","\u062e","\u062c","\u0633"]},months:{names:["\u0645\u062d\u0631\u0645","\u0635\u0641\u0631","\u0631\u0628\u064a\u0639\xa0\u0627\u0644\u0623\u0648\u0644","\u0631\u0628\u064a\u0639\xa0\u0627\u0644\u062b\u0627\u0646\u064a","\u062c\u0645\u0627\u062f\u0649\xa0\u0627\u0644\u0623\u0648\u0644\u0649","\u062c\u0645\u0627\u062f\u0649\xa0\u0627\u0644\u062b\u0627\u0646\u064a\u0629","\u0631\u062c\u0628","\u0634\u0639\u0628\u0627\u0646","\u0631\u0645\u0636\u0627\u0646","\u0634\u0648\u0627\u0644","\u0630\u0648\xa0\u0627\u0644\u0642\u0639\u062f\u0629","\u0630\u0648\xa0\u0627\u0644\u062d\u062c\u0629",""],namesAbbr:["\u0645\u062d\u0631\u0645","\u0635\u0641\u0631","\u0631\u0628\u064a\u0639\xa0\u0627\u0644\u0623\u0648\u0644","\u0631\u0628\u064a\u0639\xa0\u0627\u0644\u062b\u0627\u0646\u064a","\u062c\u0645\u0627\u062f\u0649\xa0\u0627\u0644\u0623\u0648\u0644\u0649","\u062c\u0645\u0627\u062f\u0649\xa0\u0627\u0644\u062b\u0627\u0646\u064a\u0629","\u0631\u062c\u0628","\u0634\u0639\u0628\u0627\u0646","\u0631\u0645\u0636\u0627\u0646","\u0634\u0648\u0627\u0644","\u0630\u0648\xa0\u0627\u0644\u0642\u0639\u062f\u0629","\u0630\u0648\xa0\u0627\u0644\u062d\u062c\u0629",""]},AM:["\u063a.\u0645","\u063a.\u0645","\u063a.\u0645"],PM:["\u063a.\u0648","\u063a.\u0648","\u063a.\u0648"],eras:[{name:"\u0628\u0639\u062f \u0627\u0644\u0647\u062c\u0631\u0629",start:null,offset:0}],twoDigitYearMax:1451,patterns:{d:"dd/MM/yy",D:"dd/MM/yyyy",f:"dd/MM/yyyy h:mm tt",F:"dd/MM/yyyy h:mm:ss tt",M:"dd MMMM"},convert:{ticks1970:621355968e5,monthDays:[0,30,59,89,118,148,177,207,236,266,295,325,355],minDate:-425216736e5,maxDate:0xe677d21fdbff,hijriAdjustment:0,toGregorian:function(t,e,a){var n=this.daysToYear(t)+this.monthDays[e]+a-1-this.hijriAdjustment,s=new Date(864e5*n-this.ticks1970);return s.setMinutes(s.getMinutes()+s.getTimezoneOffset()),s},fromGregorian:function(t){if(t<this.minDate||t>this.maxDate)return null;var e,a,n=this.ticks1970+(t-0)-6e4*t.getTimezoneOffset(),s=Math.floor(n/864e5)+1+this.hijriAdjustment,r=Math.floor(30*(s-227013)/10631)+1,i=this.daysToYear(r),d=this.isLeapYear(r)?355:354;i>s?(r--,i-=d):s===i?(r--,i=this.daysToYear(r)):s>i+d&&(i+=d,r++),a=0;for(var y=s-i;11>=a&&y>this.monthDays[a];)a++;return a--,e=y-this.monthDays[a],[r,a,e]},daysToYear:function(t){for(var e=30*Math.floor((t-1)/30),a=t-e-1,n=Math.floor(10631*e/30)+227013;a>0;)n+=this.isLeapYear(a)?355:354,a--;return n},isLeapYear:function(t){return 11>(11*t+14)%30}}},Gregorian_Localized:{firstDay:6,days:{names:["\u06cc\u06a9\u0634\u0646\u0628\u0647","\u062f\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200c\u0634\u0646\u0628\u0647","\u0686\u0627\u0631\u0634\u0646\u0628\u0647","\u067e\u0646\u062c\u0634\u0646\u0628\u0647","\u062c\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"],namesAbbr:["\u06cc\u06a9\u0634\u0646\u0628\u0647","\u062f\u0648\u0634\u0646\u0628\u0647","\u0633\u0647\u200c\u0634\u0646\u0628\u0647","\u0686\u0627\u0631\u0634\u0646\u0628\u0647","\u067e\u0646\u062c\u0634\u0646\u0628\u0647","\u062c\u0645\u0639\u0647","\u0634\u0646\u0628\u0647"],namesShort:["\u06cc","\u062f","\u0633","\u0686","\u067e","\u062c","\u0634"]},months:{names:["\u0633\u0644\u0648\u0627\u063a\u0647","\u0643\u0628","\u0648\u0631\u0649","\u063a\u0648\u064a\u0649","\u063a\u0628\u0631\u06ab\u0648\u0644\u0649","\u0686\u0646\u06ab\u0627 \u069a\u0632\u0645\u0631\u0649","\u0632\u0645\u0631\u0649","\u0648\u0696\u0649","\u062a\u0644\u0647","\u0644\u0693\u0645","\u0644\u0646\u0688 \u06cd","\u0645\u0631\u063a\u0648\u0645\u0649",""],namesAbbr:["\u0633\u0644\u0648\u0627\u063a\u0647","\u0643\u0628","\u0648\u0631\u0649","\u063a\u0648\u064a\u0649","\u063a\u0628\u0631\u06ab\u0648\u0644\u0649","\u0686\u0646\u06ab\u0627 \u069a","\u0632\u0645\u0631\u0649","\u0648\u0696\u0649","\u062a\u0644\u0647","\u0644\u0693\u0645","\u0644\u0646\u0688 \u06cd","\u0645\u0631\u063a\u0648\u0645\u0649",""]},AM:["\u063a.\u0645","\u063a.\u0645","\u063a.\u0645"],PM:["\u063a.\u0648","\u063a.\u0648","\u063a.\u0648"],eras:[{name:"\u0644.\u0647",start:null,offset:0}],patterns:{d:"yyyy/M/d",D:"yyyy, dd, MMMM, dddd",f:"yyyy, dd, MMMM, dddd h:mm tt",F:"yyyy, dd, MMMM, dddd h:mm:ss tt",M:"d MMMM",Y:"MMMM yyyy"}}}})}(this);