function guessCity(capital, coastal, famous, ancient)
{
    if(ancient&&famous&&capital){
        return "Jerusalem. No other cities are recognized.";
    }
    if(famous&&coastal){
        return "Tel Aviv. No other cities are recognized.";
    }   
    if(coastal&&ancient){
        return "Acre. No other cities are recognized.";
    }
    if(ancient){
        return "Katzrin. No other cities are recognized.";
    }
    if(coastal){
        return "Zikim. No other cities are recognized.";
    }
    if(false){
        return "Musmus. No other cities are recognized.";
    }
}
//example:
guessCity(false, true, true, false) 







  









}