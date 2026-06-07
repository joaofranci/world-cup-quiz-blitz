
INSERT INTO public.questions (category, question, options, correct_index, difficulty, era) VALUES
-- History
('History','Which country won the first FIFA World Cup in 1930?','["Argentina","Uruguay","Brazil","Italy"]'::jsonb,1,'easy','1930s'),
('History','Which country won the 2022 FIFA World Cup?','["France","Brazil","Argentina","Germany"]'::jsonb,2,'easy','2020s'),
('History','How many times has Brazil won the World Cup?','["3","4","5","6"]'::jsonb,2,'easy',null),
('History','In which year was the World Cup NOT held due to WWII (twice)?','["1938 & 1942","1942 & 1946","1940 & 1944","1946 & 1950"]'::jsonb,1,'medium','1940s'),
('History','Which team won the World Cup in 1966?','["England","West Germany","Brazil","Italy"]'::jsonb,0,'medium','1960s'),
('History','Who won the 1998 World Cup final?','["Brazil","France","Italy","Germany"]'::jsonb,1,'easy','1990s'),
('History','Which country won the 2010 World Cup?','["Netherlands","Germany","Spain","Argentina"]'::jsonb,2,'easy','2010s'),
('History','Germany''s 2014 title was won in which country?','["South Africa","Brazil","Russia","Qatar"]'::jsonb,1,'easy','2010s'),
('History','Italy''s last World Cup title came in which year?','["1982","1990","2006","2010"]'::jsonb,2,'medium','2000s'),
('History','Which was the first World Cup held in Asia?','["1998","2002","2006","2010"]'::jsonb,1,'medium','2000s'),

-- Players
('Players','Who scored the "Hand of God" goal?','["Pelé","Diego Maradona","Zinedine Zidane","Romário"]'::jsonb,1,'easy','1980s'),
('Players','Who won the Golden Boot at the 2022 World Cup?','["Lionel Messi","Kylian Mbappé","Olivier Giroud","Julian Alvarez"]'::jsonb,1,'medium','2020s'),
('Players','Who is the all-time top scorer in World Cup history?','["Ronaldo","Miroslav Klose","Gerd Müller","Pelé"]'::jsonb,1,'medium',null),
('Players','How many World Cups did Pelé win?','["2","3","4","1"]'::jsonb,1,'easy',null),
('Players','Who captained France to the 2018 World Cup title?','["Paul Pogba","Hugo Lloris","Antoine Griezmann","Kylian Mbappé"]'::jsonb,1,'medium','2010s'),
('Players','Who scored a hat-trick in the 1966 World Cup final?','["Bobby Charlton","Geoff Hurst","Jimmy Greaves","Roger Hunt"]'::jsonb,1,'medium','1960s'),
('Players','Zinedine Zidane was sent off in the 2006 final for headbutting whom?','["Fabio Cannavaro","Marco Materazzi","Andrea Pirlo","Gennaro Gattuso"]'::jsonb,1,'medium','2000s'),
('Players','Who won the Golden Ball at the 2014 World Cup?','["James Rodríguez","Lionel Messi","Thomas Müller","Neymar"]'::jsonb,1,'medium','2010s'),
('Players','Who scored the winning goal in the 2010 World Cup final?','["Andrés Iniesta","David Villa","Xavi","Fernando Torres"]'::jsonb,0,'medium','2010s'),
('Players','Which player won 3 World Cups as a player?','["Maradona","Pelé","Beckenbauer","Zico"]'::jsonb,1,'easy',null),

-- Records
('Records','Which player has the most World Cup appearances (matches)?','["Paolo Maldini","Lionel Messi","Lothar Matthäus","Cristiano Ronaldo"]'::jsonb,1,'hard',null),
('Records','What is the largest margin of victory in a WC final?','["3 goals","4 goals","5 goals","6 goals"]'::jsonb,0,'hard',null),
('Records','Most goals scored by one player in a single World Cup?','["13","12","11","10"]'::jsonb,0,'hard','1950s'),
('Records','Which team has the most World Cup titles?','["Germany","Italy","Brazil","Argentina"]'::jsonb,2,'easy',null),
('Records','How many goals did Miroslav Klose score across World Cups?','["14","16","15","13"]'::jsonb,2,'hard',null),
('Records','Fastest goal scored in World Cup history (seconds)?','["10","11","12","8"]'::jsonb,1,'hard',null),
('Records','Youngest goalscorer in WC history?','["Pelé","Michael Owen","Norman Whiteside","Kylian Mbappé"]'::jsonb,0,'medium','1950s'),
('Records','Most World Cup tournaments hosted by one country?','["1","2","3","4"]'::jsonb,1,'medium',null),
('Records','Which goalkeeper has the most WC clean sheets?','["Iker Casillas","Peter Shilton","Dino Zoff","Gianluigi Buffon"]'::jsonb,1,'hard',null),
('Records','Highest-scoring WC final match?','["3-2","4-2","5-2","5-3"]'::jsonb,1,'medium',null),

-- Hosts
('Hosts','Which country hosted the 2014 World Cup?','["South Africa","Brazil","Russia","Germany"]'::jsonb,1,'easy','2010s'),
('Hosts','Where was the 2018 World Cup held?','["Brazil","Qatar","Russia","France"]'::jsonb,2,'easy','2010s'),
('Hosts','Which country hosted the 2002 World Cup jointly with Japan?','["China","South Korea","Thailand","Indonesia"]'::jsonb,1,'medium','2000s'),
('Hosts','Which 3 countries will co-host the 2026 World Cup?','["USA, Canada, Mexico","USA, Mexico, Brazil","Canada, USA, Argentina","USA, Mexico, Colombia"]'::jsonb,0,'easy','2020s'),
('Hosts','Where was the 2010 World Cup held?','["Nigeria","South Africa","Egypt","Morocco"]'::jsonb,1,'easy','2010s'),
('Hosts','Which country hosted the 1990 World Cup?','["Spain","Italy","Germany","France"]'::jsonb,1,'medium','1990s'),
('Hosts','Where was the 1994 World Cup held?','["Mexico","USA","Canada","Argentina"]'::jsonb,1,'medium','1990s'),
('Hosts','Where was the 2022 World Cup played?','["UAE","Saudi Arabia","Qatar","Iran"]'::jsonb,2,'easy','2020s'),
('Hosts','Which country hosted in 1978?','["Argentina","Uruguay","Chile","Brazil"]'::jsonb,0,'medium','1970s'),
('Hosts','Which European country hosted in 2006?','["France","Germany","Italy","Spain"]'::jsonb,1,'easy','2000s'),

-- Curiosities
('Curiosities','What is the official ball of the 2022 World Cup called?','["Telstar","Jabulani","Al Rihla","Brazuca"]'::jsonb,2,'medium','2020s'),
('Curiosities','The World Cup trophy is made primarily of which material?','["Silver","Bronze","Gold","Platinum"]'::jsonb,2,'easy',null),
('Curiosities','Who designed the current FIFA World Cup Trophy?','["Silvio Gazzaniga","Abel Lafleur","Sepp Blatter","Jules Rimet"]'::jsonb,0,'hard',null),
('Curiosities','Which mascot represented the 2010 World Cup?','["Fuleco","Zakumi","Goleo","Zabivaka"]'::jsonb,1,'medium','2010s'),
('Curiosities','What was the name of the 2014 World Cup mascot?','["Fuleco","Zakumi","Footix","La''eeb"]'::jsonb,0,'medium','2010s'),
('Curiosities','The 2022 World Cup mascot was named?','["Fuleco","Zakumi","La''eeb","Zabivaka"]'::jsonb,2,'medium','2020s'),
('Curiosities','Which song was the official 2010 World Cup anthem?','["Wavin'' Flag","Waka Waka","We Are One","Live It Up"]'::jsonb,1,'medium','2010s'),
('Curiosities','What was unique about Qatar 2022''s schedule?','["Held in summer","Held in winter","Lasted 6 weeks","Played in 3 countries"]'::jsonb,1,'easy','2020s'),
('Curiosities','How often is the World Cup held?','["Every 2 years","Every 3 years","Every 4 years","Every 5 years"]'::jsonb,2,'easy',null),
('Curiosities','How many teams played at the 2022 World Cup?','["24","28","32","36"]'::jsonb,2,'easy','2020s'),

-- Rules
('Rules','How many players from each team are on the field at kickoff?','["10","11","12","9"]'::jsonb,1,'easy',null),
('Rules','How long is a standard match (excluding stoppage)?','["80 min","90 min","100 min","120 min"]'::jsonb,1,'easy',null),
('Rules','How many substitutions are allowed per team in WC matches (since 2022)?','["3","4","5","6"]'::jsonb,2,'medium','2020s'),
('Rules','What technology helps determine if the ball crossed the line?','["VAR","Goal-line technology","Hawkeye Pro","Offside cam"]'::jsonb,1,'easy',null),
('Rules','How many yellow cards lead to a one-match suspension?','["1","2","3","4"]'::jsonb,1,'easy',null),
('Rules','VAR stands for?','["Video Assistant Referee","Visual Action Replay","Verified Action Review","Video Action Replay"]'::jsonb,0,'easy',null),
('Rules','How long is each extra-time half?','["10 min","15 min","20 min","5 min"]'::jsonb,1,'medium',null),
('Rules','From how far is a penalty kick taken?','["10 yards","11 yards","12 yards","13 yards"]'::jsonb,2,'easy',null),
('Rules','How many officials make up the on-field referee team?','["2","3","4","5"]'::jsonb,2,'medium',null),
('Rules','Which card means immediate dismissal?','["Yellow","Red","Blue","Green"]'::jsonb,1,'easy',null);
