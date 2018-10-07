
#include <Wire.h>
#include "rgb_lcd.h"

rgb_lcd lcd;

char data;

void setup() 
{
      Serial.begin(9600);
      Serial.setTimeout(50);

      pinMode(2, OUTPUT);
      
      lcd.begin(16, 2);
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.setRGB(255, 255, 0);
      lcd.print("   SAFETY ON");
      lcd.setCursor(0, 1);
      lcd.print("NO BODY DETECTED");
}

void loop() 
{
  if(Serial.available()>0){ //if data has been written to the Serial stream
   data=Serial.read();
   digitalWrite(2, LOW);
   if(data == '1') { 
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.setRGB(0, 255, 0);
      lcd.print("   SAFETY OFF");
      lcd.setCursor(0, 1);
      lcd.print(" NON LETHAL AIM");
    } else if(data == '2') {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.setRGB(255, 0, 0);
      lcd.print("   SAFETY ON");
      lcd.setCursor(0, 1);
      lcd.print("   LETHAL AIM");
      digitalWrite(2, HIGH);
    } else if (data == 'd') {
      lcd.clear();
      lcd.setCursor(0, 0);
      for (int i = 0; i < 15; i++) {
        lcd.setRGB(255, 0, 0);
        lcd.print("~DISCO~");
        delay(100);
        lcd.setRGB(0, 255, 0);
        lcd.print("~DISCO~");
        delay(100);
        lcd.setRGB(0, 0, 255);
        lcd.print("~DISCO~");
        delay(100);
      }
      data = '0';
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.setRGB(255, 255, 0);
      lcd.print("   SAFETY ON");
      lcd.setCursor(0, 1);
      lcd.print("NO BODY DETECTED");
    } else {
      lcd.clear();
      lcd.setCursor(0, 0);
      lcd.setRGB(255, 255, 0);
      lcd.print("   SAFETY ON");
      lcd.setCursor(0, 1);
      lcd.print("NO BODY DETECTED");
    }
  }
}