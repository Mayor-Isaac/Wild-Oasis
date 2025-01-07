import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabin can not be loaded");
  }
  return data;
}

export async function deleteCabin(name) {
  const { error } = await supabase.from("cabins").delete().eq("name", name);
  if (error) {
    console.error(error);
    throw new Error("Cabin can not be deleted");
  }
}
