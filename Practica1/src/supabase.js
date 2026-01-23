import { createClient } from "@supabase/supabase-js";

const supabaseURL='https://ksxkmeevhpqmgfaojpca.supabase.co'
const supabaseKEY='sb_publishable_EDuasYPOquxec9i8Q7v9Tg_eLp4RMtl'

export const supabase=createClient(supabaseURL,supabaseKEY)