-- 1- Quais os top 5 atores que participaram de mais episódios?

select `Actor/ess` from  characters_v4
order by Episodes_appeared  desc limit 5;

