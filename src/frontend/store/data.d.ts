import { FeeServiceCreateParamsInterface } from "../classes/AbstractFeeService";
import { FamilyServiceCreateParamsInterface } from "../classes/AbstractFamilyService";
import { StudentServiceCreateParamsInterface } from "../classes/AbstractStudentService";
declare type State = {
    fees: FeeServiceCreateParamsInterface[];
    families: FamilyServiceCreateParamsInterface[];
    students: StudentServiceCreateParamsInterface[];
};
export declare const useDataStore: import("pinia").StoreDefinition<"data", State, {}, {
    addFee(item: FeeServiceCreateParamsInterface): void;
    updateFee(id: string, payload: Partial<FeeServiceCreateParamsInterface>): void;
    removeFee(id: string): void;
    getFeeById(id: string): FeeServiceCreateParamsInterface | undefined;
    addFamily(item: FamilyServiceCreateParamsInterface): void;
    updateFamily(id: string, payload: Partial<FamilyServiceCreateParamsInterface>): void;
    removeFamily(id: string): void;
    getFamilyById(id: string): FamilyServiceCreateParamsInterface | undefined;
    addStudent(item: StudentServiceCreateParamsInterface): void;
    updateStudent(id: string, payload: Partial<StudentServiceCreateParamsInterface>): void;
    removeStudent(id: string): void;
    getStudentById(id: string): StudentServiceCreateParamsInterface | undefined;
}>;
export default useDataStore;
