 -- 7- Quais Diretores que dirigiram a última temporada? qual a quantidade de episodios?

select distinct Director,  Season, count( Season) 

 from got_episodes_v4
 group by Director, Season
 having  Season = 8
 order by Director,  Season; 
 
 select * from got_episodes_v4;