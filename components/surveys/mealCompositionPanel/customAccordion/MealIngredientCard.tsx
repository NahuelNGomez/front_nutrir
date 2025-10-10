import { FC, useEffect, useState } from 'react';
import {
    Box,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
    Typography,
} from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import Image from 'next/image';
import { useAppCtx } from '../../../../src/contexts/store';
import { pagesStyles } from '@styles/index';
import { FormikProps } from 'formik';
import { foodStepType, mealDataType } from '../../../../src/types/global';

type Props = {
    meal: mealDataType;
    ingredienteName: string;
    ingredientId: number;
    picture: string;
    formikProps: FormikProps<any>;
};

const MealIngredientCard: FC<Props> = ({
    meal,
    ingredientId,
    ingredienteName,
    picture,
    formikProps,
}) => {
    const { modeTheme } = useAppCtx();
    const {
        surveyStyles: { ingredientsPanel },
    } = pagesStyles(modeTheme);
    const [alimentoCheck, setAlimentoCheck] = useState(false);
    const [enableQuantity, setEnableQuantity] = useState<boolean>(true);
    const [quantityValue, setQuantityValue] = useState<string | number>('');
    const [ingredientName, setIngredientname] = useState<string>('');
    const [error, setError] = useState(false);
    const [unit, setUnit] = useState<number>(1);

    const handleChange = (event: SelectChangeEvent) => {
        setUnit(event.target.value as unknown as number);
    };

    const { setFieldValue, values } = formikProps;
    // Buscar la comida correspondiente en el array de comidas
    const currentComida = values.comidas?.find((comida: any) => comida.comida === meal.id);
    const currentAlimentos = currentComida?.alimento || [];

    useEffect(() => {
        const alimentoChecked = currentAlimentos.filter(
            (alimento: foodStepType) => alimento.id === ingredientId
        );

        if (alimentoChecked.length) {
            setAlimentoCheck(true);
            setEnableQuantity(false);
            // Solo actualizar si el valor es diferente para evitar sobrescribir lo que está escribiendo el usuario
            if (alimentoChecked[0].quantity !== quantityValue) {
                setQuantityValue(alimentoChecked[0].quantity || '');
            }
            // Establecer la unidad del alimento seleccionado usando unitId en lugar de unit
            if (alimentoChecked[0].unitId) {
                setUnit(alimentoChecked[0].unitId);
            }
        } else {
            // Si no hay alimento seleccionado, resetear el estado
            setAlimentoCheck(false);
            setEnableQuantity(true);
            setQuantityValue('');
        }
    }, [ingredientId, currentAlimentos]);

    // Establecer la primera unidad por defecto cuando se carga el componente
    useEffect(() => {
        const currentAlimento = meal.alimento.find(
            (alimento) => alimento.id === ingredientId
        );
        
        if (currentAlimento && currentAlimento.unidades && currentAlimento.unidades.length > 0) {
            // Solo establecer la primera unidad si no hay un alimento ya seleccionado
            const alimentoYaSeleccionado = currentAlimentos.some((alimento: foodStepType) => alimento.id === ingredientId);
            if (!alimentoYaSeleccionado && unit === 1) {
                setUnit(currentAlimento.unidades[0].id);
            }
        }
    }, [ingredientId, meal.alimento, currentAlimentos]);

    // Sincronizar la unidad cuando cambia el estado del formulario
    useEffect(() => {
        const currentAlimento = meal.alimento.find(
            (alimento) => alimento.id === ingredientId
        );
        
        if (currentAlimento && currentAlimento.unidades && currentAlimento.unidades.length > 0) {
            // Si la unidad actual no es válida para este alimento, usar la primera disponible
            const unidadValida = currentAlimento.unidades.find(u => u.id === unit);
            if (!unidadValida && currentAlimento.unidades.length > 0) {
                setUnit(currentAlimento.unidades[0].id);
            }
        }
    }, [unit, ingredientId, meal.alimento]);

    const ingredientHandleChange = (e: any) => {
        if (e.target.checked) {
            setAlimentoCheck(true);
            setEnableQuantity(false);
            setIngredientname(e.target.name.toLocaleLowerCase());
            
            // Guardar el ingrediente con la unidad seleccionada actualmente
            const currentAlimento = meal.alimento.find(
                (alimento) => alimento.id === ingredientId
            );
            const selectedUnidad = currentAlimento?.unidades?.find(u => u.id === unit);
            const unidadNombre = selectedUnidad?.nombre || currentAlimento?.unidades?.[0]?.nombre || '';
            const unitId = selectedUnidad?.id || currentAlimento?.unidades?.[0]?.id || 1;
            
            // Asegurar que la comida existe en el array de comidas
            let updatedComidas = values.comidas || [];
            const existingComidaIndex = updatedComidas.findIndex((comida: any) => comida.comida === meal.id);
            
            if (existingComidaIndex === -1) {
                updatedComidas.push({
                    comida: meal.id,
                    nombre: meal.nombre,
                    alimento: []
                });
            }
            
            // Agregar el ingrediente con la unidad seleccionada
            const newIngredient = {
                id: ingredientId,
                nombre: ingredienteName,
                quantity: 0,
                unit: unidadNombre,
                unitId: unitId,
            };
            
            console.log('Guardando ingrediente:', newIngredient);
            
            updatedComidas = updatedComidas.map((comida: any) => 
                comida.comida === meal.id 
                    ? {
                        ...comida,
                        alimento: [
                            ...comida.alimento,
                            newIngredient
                        ]
                    }
                    : comida
            );
            
            console.log('Comidas actualizadas:', updatedComidas);
            setFieldValue('comidas', updatedComidas);
        }

        if (e.target.checked === false) {
            setAlimentoCheck(false);
            setEnableQuantity(true);
            setIngredientname('');
            setQuantityValue('');
            // No resetear la unidad aquí para mantener la selección del usuario

            const newAlimentosEntry = currentAlimentos.filter(
                (alimento: foodStepType) => alimento.id !== ingredientId
            );
            
            // Actualizar la comida específica en el array de comidas
            const updatedComidas = values.comidas?.map((comida: any) => 
                comida.comida === meal.id 
                    ? { ...comida, alimento: newAlimentosEntry }
                    : comida
            ) || [];
            
            setFieldValue('comidas', updatedComidas);
        }
    };

    const quantityFielHandleChange = (e: any) => {
        const inputValue = e.target.value;
        
        // Actualizar siempre el valor mostrado
        setQuantityValue(inputValue);
        
        // Si está vacío, solo limpiar errores pero NO eliminar el ingrediente
        // El ingrediente se mantiene seleccionado hasta que el usuario lo deseleccione explícitamente
        if (inputValue === '' || inputValue === null || inputValue === undefined) {
            setError(false);
            // NO eliminar el alimento del formulario cuando está vacío temporalmente
            // Solo actualizar la cantidad a 0 pero mantener el ingrediente seleccionado
            const updatedComidas = values.comidas?.map((comida: any) => 
                comida.comida === meal.id 
                    ? { 
                        ...comida, 
                        alimento: comida.alimento.map((alimento: any) => 
                            alimento.id === ingredientId 
                                ? { ...alimento, quantity: 0 }
                                : alimento
                        )
                    }
                    : comida
            ) || [];
            
            setFieldValue('comidas', updatedComidas);
            return;
        }
        
        // Con type='number' el navegador ya valida que sea un número válido
        const numericValue = parseFloat(inputValue);
        if (!isNaN(numericValue) && numericValue >= 0) {
            setError(false);
            
            const newAlimentosEntry = currentAlimentos.filter(
                (el: foodStepType) => el.id !== ingredientId
            );

            // Asegurar que la comida existe en el array de comidas
            let updatedComidas = values.comidas || [];
            const existingComidaIndex = updatedComidas.findIndex((comida: any) => comida.comida === meal.id);
            
            if (existingComidaIndex === -1) {
                // Si la comida no existe, agregarla
                updatedComidas.push({
                    comida: meal.id,
                    nombre: meal.nombre,
                    alimento: []
                });
            }
            
            // Obtener el nombre y ID de la unidad - usar la unidad seleccionada actualmente
            const currentAlimento = meal.alimento.find(
                (alimento) => alimento.id === ingredientId
            );
            const selectedUnidad = currentAlimento?.unidades?.find(u => u.id === unit);
            const unidadNombre = selectedUnidad?.nombre || currentAlimento?.unidades?.[0]?.nombre || '';
            const unitId = selectedUnidad?.id || currentAlimento?.unidades?.[0]?.id || 1;
            
            // Actualizar los alimentos de la comida específica
            updatedComidas = updatedComidas.map((comida: any) => 
                comida.comida === meal.id 
                    ? {
                        ...comida,
                        alimento: [
                            ...newAlimentosEntry,
                            {
                                id: ingredientId,
                                nombre: ingredientName,
                                quantity: numericValue,
                                unit: unidadNombre,
                                unitId: unitId,
                            },
                        ]
                    }
                    : comida
            );
            
            setFieldValue('comidas', updatedComidas);
        } else {
            setError(true);
        }
    };

    const currentAlimento = meal.alimento.find(
        (alimento) => alimento.id === ingredientId
    );

    return (
        <Grid
            container
            item
            xs={12}
            sx={ingredientsPanel.compoundCard.container}
            justifyContent={'space-between'}
        >
            <Grid
                item
                container
                xs={5}
                sm={5}
                md={5}
                lg={7}
                xl={7}
                sx={ingredientsPanel.compoundCard.descriptionContainer}
            >
                <Grid
                    item
                    xs={2}
                    sm={2}
                    md={1}
                    sx={ingredientsPanel.compoundCard.imageContainer}
                >
                    <div style={{ display: 'flex', position: 'relative' }}>
                        <Image
                            src={picture}
                            alt={`${picture}`}
                            width={50}
                            height={50}
                        />
                    </div>
                </Grid>

                <Grid
                    item
                    xs={4}
                    sx={ingredientsPanel.compoundCard.primaryText}
                >
                    <Typography>{ingredienteName}</Typography>
                </Grid>
            </Grid>

            <Grid
                container
                xs={7}
                sm={7}
                md={5}
                lg={5}
                xl={5}
                spacing={2}
                sx={ingredientsPanel.compoundCard.quantityContainer}
            >
                <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{ mr: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 } }}
                >
                    <TextField
                        onChange={quantityFielHandleChange}
                        id='outlined-number'
                        value={quantityValue}
                        disabled={enableQuantity}
                        type='number'
                        inputProps={{ 
                            step: '0.1',
                            min: '0'
                        }}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        placeholder="0"
                    />
                </Grid>
                <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{ mr: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 } }}
                >
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id='unit-label'>Unidad</InputLabel>
                            {currentAlimento && (
                                <Select
                                    labelId='unit-label'
                                    id='unit'
                                    value={unit.toString()}
                                    label='Unidad'
                                    onChange={handleChange}
                                >
                                    {currentAlimento.unidades?.map((unidad) => (
                                        <MenuItem value={unidad.id} key={unidad.id}>
                                            {unidad.nombre}
                                        </MenuItem>
                                    ))}
                                </Select>
                            )}
                        </FormControl>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={1}
                    sx={{ ml: { xs: 1, sm: 1, md: 2, lg: 2, xl: 2 } }}
                >
                    <Checkbox
                        checked={alimentoCheck}
                        name={ingredienteName}
                        onClick={(e) => ingredientHandleChange(e)}
                    />
                </Grid>
            </Grid>
            {error && (
                <Typography sx={ingredientsPanel.compoundCard.errorMsg}>
                    La cantidad de alimento no puede ser menor a 0
                </Typography>
            )}
        </Grid>
    );
};

export default MealIngredientCard;
