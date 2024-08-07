
import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://qgvnwbjzdnskizwooqbv.supabase.co';
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFndm53Ymp6ZG5za2l6d29vcWJ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTkwOTA4NjIsImV4cCI6MjAzNDY2Njg2Mn0.-6oI30H0AsJva3sFJForpdc2NhUg_2QRwLUlYOxApXw";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;