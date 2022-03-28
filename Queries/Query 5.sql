-- 5- Quantas casas que se localizam na parte norte?

select Region, count(House_name) 
as `houses`
from got.houses_v1
where Region like 'North';