import { connectToDB } from "@/lib/mongodb";
import CustomerModel from "@/models/Customer";
import { CustomerDTO, Customer } from "@/types/customer";

export async function getCustomerById(id: string): Promise<Customer | null> {
  try {
    await connectToDB();
    return await CustomerModel.findById(id);
  } catch (error) {
    throw error;
  }
}

export async function getAllCustomers(): Promise<Customer[]> {
  try {
    await connectToDB();
    return await CustomerModel.find({});
  } catch (error) {
    throw error;
  }
}

export async function createCustomer(data: CustomerDTO): Promise<Customer> {
  try {
    await connectToDB();
    return await CustomerModel.create(data);
  } catch (error) {
    throw error;
  }
}

export async function updateCustomer(
  id: string,
  data: CustomerDTO,
): Promise<Customer | null> {
  try {
    await connectToDB();
    const customer = await CustomerModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return customer;
  } catch (error) {
    throw error;
  }
}

export async function deleteCustomer(id: string): Promise<Customer | null> {
  try {
    await connectToDB();
    const customer = await CustomerModel.findByIdAndDelete(id);
    return customer;
  } catch (error) {
    throw error;
  }
}
