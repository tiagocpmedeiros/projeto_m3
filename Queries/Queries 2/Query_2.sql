-- 2: Qual o top 5 temporadas com notas mais altas?
select Season from got_episodes_v4
order by rating desc limit 5;